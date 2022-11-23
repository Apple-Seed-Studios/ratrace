import {TextField, Button} from '@mui/material';

const style = {
  textField: {
    padding: '5px'
  },
  button: { margin: '10px' }
};

function TaskFromContent({ handleSubmit, toggleForm }) {
  return ( 
    <form onSubmit={handleSubmit}>
      <TextField style={ style.textField } label='Task Name' id='task_name' required></TextField>
      <TextField style={ style.textField } label='Description' id='task_description' required></TextField>
      <TextField style={ style.textField } label='Tag' id='tags' required></TextField>
      <Button style={ style.button } type='submit' onClick={toggleForm} variant='outlined'>Save</Button>
    </form>
   );
}

export default TaskFromContent;