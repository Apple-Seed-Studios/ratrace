import Button from '@mui/material/Button'
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import TaskFormContent from './TaskFormContent';
import { addTask } from '../../store/tasks';
import './TaskForm.scss'


const TaskForm = function () {

    let dispatch = useDispatch();
    // let tasks = useSelector(state => state.tasks)
    let [ showForm, setShowForm ] = useState(false);

    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({
            task_name: e.target.elements.task_name.value,
            task_description: e.target.elements.task_description.value,
            tracked_time: 25000000,
            tag: e.target.elements.tags.value,
//            task_name: e.target.task_name.value,
//            task_description: e.target.task_description.value,
        }))
    }

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    return (<div className="taskform">
    <Dialog open={showForm} onClose={toggleForm}>
        <DialogTitle>Add task</DialogTitle>
        <DialogContent>
                <TaskFormContent handleSubmit={handleSubmit} toggleForm={toggleForm} />
        </DialogContent>
    </Dialog>
    <Button variant='contained' onClick={toggleForm}>+ Task</Button>
    </div>)
}

export default TaskForm;
