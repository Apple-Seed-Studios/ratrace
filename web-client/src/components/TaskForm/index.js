import Button from '@mui/material/Button'
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import TaskFromContent from './TaskFormContent';
import { addTask } from '../../store/tasks';


const TaskForm = function ()
{

    let dispatch = useDispatch();
    let tasks = useSelector(state => state.tasks)
    let [ showForm, setShowForm ] = useState(false);

    let handleSubmit = (e) =>
    {
        e.preventDefault();
        dispatch(addTask({
            task_name: e.target.task_name.value,
            task_description: e.target.task_description.value,
        }))
        console.log(tasks)
    }
    const toggleForm = () =>
    {
        setShowForm(!showForm);
    }


    return (<>
    <Dialog open={showForm} onClose={toggleForm}>
        <DialogTitle>Add task</DialogTitle>
        <DialogContent>
                <TaskFromContent handleSubmit={handleSubmit} toggleForm={toggleForm} />
        </DialogContent>
    </Dialog>
    <Button variant='contained' onClick={toggleForm}>+ Task</Button>
    </>)
}

export default TaskForm;
