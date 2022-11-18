import Button from '@mui/material/Button'
import { TextField, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
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


    return (
        <>
            <Dialog open={ showForm } onClose={ toggleForm }>
                <DialogTitle>Add task</DialogTitle>
                <DialogContent>
                    <form onSubmit={ handleSubmit }>
                        <TextField label='Task Name' id='task_name'></TextField>
                        <TextField label='Description' id='task_description'></TextField>
                        <Button type='submit' onClick={ toggleForm } variant='outlined'>Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
            <Button variant='contained' onClick={ toggleForm }>+ Task</Button>
        </>
    )
}

export default TaskForm;
