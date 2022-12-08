import {TextField, Button, Fab, Chip, Grid} from '@mui/material';
import { useState } from 'react';
import { addTask } from '../../store/tasks';
import { useDispatch } from 'react-redux'

function TaskFromContent({toggleForm }) {

  let [tagFormOpen, setTagFormOpen] = useState(false)
  let [tempTags, setTempTags] = useState([]);
  let [taskName, setTaskName] = useState('');
  let [taskDescription, setTaskDescription] = useState('');

  let dispatch = useDispatch();

  let handleTags = (e) => {
    e.preventDefault();
    setTempTags([...tempTags, e.target.tags.value])
    setTagFormOpen(false);
  }
  let handleTagDelete = (tag) => {
    let newTags = tempTags.filter(currentTags => currentTags !== tag)
    setTempTags(newTags)
  }

  let handleSubmit = () => {
    dispatch(addTask({
        task_name: taskName,
        task_description: taskDescription,
        tracked_time: 0,
        tag: tempTags,
    }))
    setTempTags([])
    setTaskName('')
    setTaskDescription('')
}

  return (<>
  <Grid container spacing={2}>
        <Grid item xs={10}>
      <TextField fullWidth onChange={(e) => setTaskName(e.target.value)} variant='outlined' label='Task Name' id='task_name' required></TextField>
      </Grid>
      <Grid item xs={2}>
      <Button sx={{ marginTop:'15%', width: '50%'}}size='small' onClick={() => {toggleForm(); handleSubmit(); }} variant='outlined'>Save</Button>
      </Grid>
      <Grid item xs={10}>
      <TextField fullWidth multiline rows={4} onChange={(e)=> setTaskDescription(e.target.value)}variant='outlined' label='Description' id='task_description' required></TextField>
      </Grid>
        {tagFormOpen 
        ?<form onSubmit={handleTags}>
          <TextField variant='outlined' label='Tag' id='tags' required></TextField>
          <Button type='submit'>Add Tag</Button>
          <Button onClick={() => setTagFormOpen(false)}>X</Button>
        </form>
        :<Grid item xs={2}>
        <Chip color='primary' label='+ Tag' onClick={() => setTagFormOpen(true)}></Chip>
        </Grid>
        }
      <Grid item xs={10}>
        {tempTags.map((tag, idx) => {
          console.log(tag)
          return (<Chip key={idx} label={tag} onDelete={() => handleTagDelete(tag)}></Chip>)
        })}

    </Grid>
    </Grid>
    </>
   );
}

export default TaskFromContent;