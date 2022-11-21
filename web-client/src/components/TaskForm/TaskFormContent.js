import {TextField, Button} from '@mui/material';

function TaskFromContent({ handleSubmit, toggleForm }) {
  return ( 
    <form onSubmit={handleSubmit}>
      <TextField label='Task Name' id='task_name' required></TextField>
      <TextField label='Description' id='task_description' required></TextField>
      <Button type='submit' onClick={toggleForm} variant='outlined'>Submit</Button>
    </form>
   );
}

export default TaskFromContent;