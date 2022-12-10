import { TextField, Button, Chip, Autocomplete } from '@mui/material';
import { useState } from 'react';
import { addTask } from '../../store/tasks';
import { useDispatch } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Grid from '@mui/material/Unstable_Grid2';

function TaskFromContent({ toggleForm }) {

  let [tagFormOpen, setTagFormOpen] = useState(false)
  let [tempTags, setTempTags] = useState([]);
  let [taskName, setTaskName] = useState('');
  let [taskDescription, setTaskDescription] = useState('');
  let [newTag, setNewTag] = useState('')

  let dispatch = useDispatch();

  let handleTags = (e) => {
    e.preventDefault();
    if(!tempTags.includes(newTag)){
    setTempTags([...tempTags, newTag]);
    }
    setTagFormOpen(false);
    setNewTag('')
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
      <Grid item lg={10}>
        <TextField fullWidth onChange={(e) => setTaskName(e.target.value)} variant='outlined' label='Task Name' id='task_name' required></TextField>
      </Grid>
      <Grid item lg={2}>
        <Button sx={{ marginTop: '15%', width: '50%' }} size='small' onClick={() => { toggleForm(); handleSubmit(); }} variant='outlined'>Save</Button>
      </Grid>
      <Grid item lg={10}>
        <TextField fullWidth multiline rows={4} onChange={(e) => setTaskDescription(e.target.value)} variant='outlined' label='Description' id='task_description' required></TextField>
      </Grid>
      {tagFormOpen
        ? <>
          <Grid item lg={2}>
            {/* Foundation for tag suggestion, do not delete */}
            {/* <Autocomplete
              options={[]}
              onInputChange={(e) => setNewTag(e.target.value)}
              label='Tag' id='tags'
              renderInput={(params) => <TextField {...params}
                label='Tag'
              />}></Autocomplete> */}
              <TextField onChange={(e) => setNewTag(e.target.value)}></TextField>
              <Button size='small' onClick={handleTags}><CheckIcon /></Button>
              <Button size='small' onClick={() => setTagFormOpen(false)}><HighlightOffIcon/></Button>
            </Grid>
        </>
        : <Grid item lg={2}>
          <Chip color='primary' label='+ Tag' onClick={() => setTagFormOpen(true)}></Chip>
        </Grid>
      }
      <Grid item lg={10}>
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