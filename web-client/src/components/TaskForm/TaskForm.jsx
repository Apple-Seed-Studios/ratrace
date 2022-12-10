import Button from '@mui/material/Button'
import { Dialog, DialogContent, Box } from '@mui/material';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import TaskFormContent from './TaskFormContent';
import { addTask } from '../../store/tasks';
import './TaskForm.scss'


const TaskForm = function () {

    let dispatch = useDispatch();
    let [ showForm, setShowForm ] = useState(false);

    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({
            task_name: e.target.elements.task_name.value,
            task_description: e.target.elements.task_description.value,
            tracked_time: 0,
            // tag: e.target.elements.tags.value,
        }))
    }

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    return (<div className="taskform">
    <Dialog sx={{maxWidth: 'lg', fullWidth: 'true'}}open={showForm} onClose={toggleForm}>
        <DialogContent>
                <TaskFormContent handleSubmit={handleSubmit} toggleForm={toggleForm} />
        </DialogContent>
    </Dialog>
    <Button variant='contained' onClick={toggleForm}>+ Task</Button>
    </div>)
}

export default TaskForm;
