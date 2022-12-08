import Button from '@mui/material/Button'
import { Dialog, DialogContent } from '@mui/material';
import { useState } from 'react';
import TaskFormContent from './TaskFormContent';

import './TaskForm.scss'


const TaskForm = function () {


    let [ showForm, setShowForm ] = useState(false);



    const toggleForm = () => {
        setShowForm(!showForm);
    }

    return (<div className="taskform">
    <Dialog sx={{maxWidth: 'lg', fullWidth: 'true'}}open={showForm} onClose={toggleForm}>
        <DialogContent>
                <TaskFormContent toggleForm={toggleForm} />
        </DialogContent>
    </Dialog>
    <Button variant='contained' onClick={toggleForm}>+ Task</Button>
    </div>)
}

export default TaskForm;
