import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { convertTimeReadable } from '../../hooks/convertTime';
import { getTasks, deleteTask, updateTask } from '../../store/tasks';
import { setActiveTask } from '../../store/activeTask';
import { Card, CardContent, CardActionArea, Typography, IconButton, Dialog, TextField, Button, Fab } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import TagIcon from '@mui/icons-material/Tag';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ToggleCompleted from './ToggleCompleted';
import { If, Then, Else } from 'react-if';
import './TaskDisplay.scss'

const TaskDisplay = function ()
{
    let dispatch = useDispatch();
    let tasks = useSelector(state => state.tasks);
    let activeTask = useSelector(state => state.activeTask)
    let [ modalOn, setModalOn ] = useState(false)
    let [ currentEdit, setCurrentEdit ] = useState([]);
    const [ showCompleted, setShowCompleted ] = useState(false);

    useEffect(() =>
    {
        const loadTasks = async () =>
        {
            await dispatch(getTasks());
        };
        loadTasks();
        //eslint-disable-next-line
    }, []);

    // when showCompleted changes, do something
    useEffect(() =>
    {
        console.log('show completed: ', showCompleted);
    }, [ showCompleted ])

    let handleModalSubmit = (event, task) =>
    {
        event.preventDefault();
        task.task_name = event.target.task_name.value;
        task.task_description = event.target.task_description.value;
        dispatch(updateTask(task));
    }

    let completeTask = (event, task) =>
    {
        event.preventDefault();
        task.complete = !task.complete;
        dispatch(updateTask(task));
    }

    let handleModal = (task) =>
    {
        return (
            <Dialog open={ modalOn } onClose={ () => setModalOn(false) }>
                <form onSubmit={ (event) => handleModalSubmit(event, task) }>
                    <TextField id='task_name' defaultValue={ task.task_name }></TextField>
                    <TextField id='task_description' defaultValue={ task.task_description }></TextField>
                    <Button type='submit'>Update</Button>
                </form>
            </Dialog>
        )
    }

    const handleShowCompleted = () =>
    {
        setShowCompleted(!showCompleted);
    };

    return (
        <div className="taskdisplay">
            <ToggleCompleted handleShowCompleted={ handleShowCompleted } />

            <If condition={ showCompleted }>
                <Then>
                    { tasks.map(task =>
                    {
                        return (
                            <Card variant='outlined' id={ task._id } key={ task._id }>
                                
                                <CardContent onClick={ () => { setCurrentEdit(task); setModalOn(true) } }>
                                <CardActionArea>
                                    <Typography variant='h5'>{ task.task_name }</Typography>
                                    <Typography variant='body1'>{ task.task_description }</Typography>
                                    <Typography variant='subtitle2'>#{ task.tag }</Typography>
                                    <Typography variant='subtitle1'>{ activeTask && task._id === activeTask._id ? convertTimeReadable(activeTask.tracked_time).minutesSeconds : convertTimeReadable(task.tracked_time).minutesSeconds }</Typography>
                                </CardActionArea>
                                </CardContent>
                                <Fab size='small' onClick={ () => dispatch(setActiveTask(task)) }><PlayArrowIcon /></Fab>
                                <IconButton onClick={ (event) => completeTask(event, task) }><CheckIcon /></IconButton>
                                <IconButton onClick={ () => dispatch(deleteTask(task)) }><ClearIcon /></IconButton>
                                <IconButton ><TagIcon /></IconButton>
                            </Card>)
                    }) }
                </Then>
                <Else>
                    { tasks.filter(task => !task.complete)
                        .map(task =>
                        {
                            return (
                                <Card variant='outlined' sx={{backgroundColor: '#424242', marginBottom: 2}}id={ task._id } key={ task._id }>
                                    <CardActionArea>
                                    <CardContent onClick={ () => { setCurrentEdit(task); setModalOn(true) } }>
                                        <Typography variant='h5'>{ task.task_name }</Typography>
                                        <Typography variant='body1'>{ task.task_description }</Typography>
                                        <Typography variant='subtitle2'>#{ task.tag }</Typography>
                                        <Typography variant='subtitle1'>{ activeTask && task._id === activeTask._id ? convertTimeReadable(activeTask.tracked_time).minutesSeconds : convertTimeReadable(task.tracked_time).minutesSeconds }</Typography>
                                    </CardContent>
                                    </CardActionArea>
                                    <Fab size='small' onClick={ () => dispatch(setActiveTask(task)) }><PlayArrowIcon /></Fab>
                                    <IconButton onClick={ (event) => completeTask(event, task) }><CheckIcon /></IconButton>
                                    <IconButton onClick={ () => dispatch(deleteTask(task)) }><ClearIcon /></IconButton>
                                    <IconButton ><TagIcon /></IconButton>
                                </Card>)
                        }) }
                </Else>
            </If>
            { modalOn ? handleModal(currentEdit) : [] }
        </div>)

}

export default TaskDisplay;
