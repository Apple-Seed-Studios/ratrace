import Button from '@mui/material/Button'
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import TaskFromContent from './TaskFormContent';
import { addTask } from '../../store/tasks';


const TaskForm = function () {

    let dispatch = useDispatch();
    // let tasks = useSelector(state => state.tasks)
    let [ showForm, setShowForm ] = useState(false);

    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({
            task_name: e.target.elements.task_name.value,
            task_description: e.target.elements.task_description.value,
            tracked_time: 0,
            tags: [e.target.tags.value],
//            task_name: e.target.task_name.value,
//            task_description: e.target.task_description.value,
        }))
    }

    const toggleForm = () => {
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
