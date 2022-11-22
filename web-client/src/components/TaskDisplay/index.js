import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { convertTimeReadable } from '../../hooks/convertTime';
import { getTasks, deleteTask } from '../../store/tasks';
import { setActiveTask } from '../../store/activeTask';
import { Card, CardContent, Typography, IconButton, Dialog, TextField, Button, Fab } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import TagIcon from '@mui/icons-material/Tag';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



const TaskDisplay = function () {
    let dispatch = useDispatch();
    let tasks = useSelector(state => state.tasks);
    let activeTask = useSelector(state => state.activeTask)
    let [modalOn, setModalOn] = useState(false)
    let [currentEdit, setCurrentEdit] = useState([]);

    useEffect( () =>{
        const loadTasks = async () => {
        await dispatch(getTasks());
    };
    loadTasks();
    //eslint-disable-next-line
}, []);

let handleModal = (task) => {
    return (
        <Dialog open={modalOn} onClose={() => setModalOn(false)}>
            <form>
                <TextField defaultValue={task.task_name}></TextField>
                <TextField defaultValue={task.task_description}></TextField>
                <Button type='submit'>Update</Button>
            </form>
        </Dialog>
    )
}

    return (<>
        {tasks.map(task => {
            return (<Card id={task._id} onClick={() => {setCurrentEdit(task); setModalOn(true)}}>
                <CardContent>
                    <Typography variant='h5'>{task.task_name}</Typography>
                    <Typography variant='body1'>{task.task_description}</Typography>
                    <Typography variant='subtitle1'>{activeTask && task._id === activeTask._id ?convertTimeReadable(activeTask.tracked_time).minutesSeconds:convertTimeReadable(task.tracked_time).minutesSeconds}</Typography>
                </CardContent>
                <Fab size='small' onClick={() => dispatch(setActiveTask(task))}><PlayArrowIcon/></Fab>
                <IconButton><CheckIcon/></IconButton>
                <IconButton onClick={() => dispatch(deleteTask(task))}><ClearIcon/></IconButton>
                <IconButton ><TagIcon/></IconButton>
            </Card>)
        })}
        {modalOn ? handleModal(currentEdit): []}
    </>)

}

export default TaskDisplay;
