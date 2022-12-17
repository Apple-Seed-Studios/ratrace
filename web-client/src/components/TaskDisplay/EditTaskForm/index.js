import {
  Dialog,
  DialogContent,
} from '@mui/material';
import TaskFormContent from '../../TaskForm/TaskFormContent';

let editForm = (props) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      open={props.modalOn}
      onClose={props.toggleForm}
    >
      <DialogContent>
        <TaskFormContent toggleForm={props.toggleForm} editTask={props.currentEdit} />
      </DialogContent>
    </Dialog>
  );
};

export default editForm;