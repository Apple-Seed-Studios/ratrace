import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { convertTimeReadable } from '../../hooks/convertTime';
import { getTasks, deleteTask, updateTask } from '../../store/tasks';
import { setActiveTask } from '../../store/activeTask';
import { Card, CardContent, Typography, IconButton, Dialog, DialogContent, Fab, CardActionArea } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ToggleCompleted from './ToggleCompleted';
import { If, Then, Else } from 'react-if';
import './TaskDisplay.scss'
import TaskFromContent from '../TaskForm/TaskFormContent'

const TaskDisplay = function () {
    let dispatch = useDispatch();
    let tasks = useSelector(state => state.tasks);
    let activeTask = useSelector(state => state.activeTask)
    let [ modalOn, setModalOn ] = useState(false)
    let [ currentEdit, setCurrentEdit ] = useState([]);
    const [ showCompleted, setShowCompleted ] = useState(false);

    useEffect(() => {
        const loadTasks = async () =>
        {
            await dispatch(getTasks());
        };
        loadTasks();
        //eslint-disable-next-line
    }, []);

    let completeTask = (event, task) => {
        event.preventDefault();
        task.complete = !task.complete;
        dispatch(updateTask(task));
    }

    let editForm = () => {
        return (
            <Dialog fullWidth={true} maxWidth={'md'} open={modalOn} onClose={toggleForm}>
                <DialogContent>
                    <TaskFromContent toggleForm={toggleForm} editTask={currentEdit}/>
                </DialogContent>
            </Dialog>
        )
    }

    let toggleForm = () => {
        setModalOn(!modalOn)
    }

    const handleShowCompleted = () => {
        setShowCompleted(!showCompleted);
    };

    const notCompletedTextStyle = {};
    const completedTextStyle = {
        textDecoration: 'line-through',
        color: 'grey'
    }

    return (
        <div className="taskdisplay">
            <ToggleCompleted handleShowCompleted={ handleShowCompleted } showCompleted={ showCompleted } />

            <If condition={ showCompleted }>
                <Then>
                    { tasks.map(task =>
                    {  console.log(task.tag)
                        return (
                            <Card variant='outlined' sx={{ backgroundColor: '#424242', marginBottom: 2 }} id={ task._id } key={ task._id }>
                                <CardContent onClick={ () => { setCurrentEdit(task); setModalOn(true) } }>
                                    <CardActionArea>
                                            <Typography style={ task.complete ? completedTextStyle : notCompletedTextStyle } variant='h5'>{ task.task_name }</Typography>
                                            <Typography style={task.complete ? completedTextStyle : notCompletedTextStyle} variant='body1'>{ task.task_description }</Typography>
                                            {task.tag ? console.log(task.tag.map(t => { return (<Typography variant='subtitle2'>{t}</Typography>)})) : []}
                                            <Typography variant='subtitle1'>{ activeTask && task._id === activeTask._id ? convertTimeReadable(activeTask.tracked_time).minutesSeconds : convertTimeReadable(task.tracked_time).minutesSeconds }</Typography>
                                    </CardActionArea>
                                </CardContent>
                                <Fab size='small' onClick={ () => dispatch(setActiveTask(task)) }><PlayArrowIcon /></Fab>
                                <IconButton onClick={(event) => completeTask(event, task)}>
                                    <CheckIcon />
                                </IconButton>
                                <IconButton onClick={ () => dispatch(deleteTask(task)) }><ClearIcon /></IconButton>
                            </Card>)
                    }) }
                </Then>
                <Else>
                    { tasks.filter(task => !task.complete)
                        .map(task =>
                        {
                            return (
                                <Card variant='outlined' sx={{backgroundColor: '#424242', marginBottom: 2}} id={ task._id } key={ task._id }>
                                    <CardActionArea>
                                    <CardContent onClick={ () => { setCurrentEdit(task); setModalOn(true) } }>
                                      <CardActionArea>
                                        <Typography variant='h5'>{ task.task_name }</Typography>
                                        <Typography variant='body1'>{ task.task_description }</Typography>
                                        {task.tag ? task.tag.map(t => { return (<Typography variant='subtitle2'>#{t}</Typography>)}) : []}
                                        <Typography variant='subtitle1'>{ activeTask && task._id === activeTask._id ? convertTimeReadable(activeTask.tracked_time).minutesSeconds : convertTimeReadable(task.tracked_time).minutesSeconds }</Typography>
                                      </CardActionArea>
                                    </CardContent>
                                    </CardActionArea>
                                    <Fab size='small' onClick={ () => dispatch(setActiveTask(task)) }><PlayArrowIcon /></Fab>
                                    <IconButton onClick={ (event) => completeTask(event, task) }><CheckIcon /></IconButton>
                                    <IconButton onClick={ () => dispatch(deleteTask(task)) }><ClearIcon /></IconButton>
                                </Card>)
                        }) }
                </Else>
            </If>
            { modalOn ? editForm() : [] }
        </div>)

}

export default TaskDisplay;
