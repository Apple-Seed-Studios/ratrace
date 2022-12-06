import {TextField, Button, Fab, Chip} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react'

const style = {
  textField: {
    display: 'grid',
    padding: '5px',
    width: '500px'
  },
  InputProps: {
    disableUnderline: 'true',
  },
  button: { margin: '10px' }
};

function TaskFromContent({ handleSubmit, toggleForm }) {

  let [tagFormOpen, setTagFormOpen] = useState(false)
  let [tempTags, setTempTags] = useState([]);

  let handleTags = (e) => {
    e.preventDefault();
    setTempTags([...tempTags, e.target.tags.value])
    setTagFormOpen(false);
  }
  let handleTagDelete = (tag) => {
    let newTags = tempTags.filter(currentTags => currentTags !== tag)
    setTempTags(newTags)
  }

  return (<>
    <form onSubmit={handleSubmit}>
      <TextField style={ style.textField } InputProps={style.InputProps} variant='standard' label='Task Name' id='task_name' required></TextField>
      <TextField style={ style.textField } InputProps={style.InputProps} variant='standard' label='Description' id='task_description' required></TextField>
      {tempTags.map((tag, idx) => {
        console.log(tag)
        return (<Chip key={idx} label={tag} onDelete={() => handleTagDelete(tag)}></Chip>)
      })}
      <Button style={ style.button } type='submit' onClick={toggleForm} variant='outlined'>Save</Button>
    </form>
    {tagFormOpen 
      ?<form onSubmit={handleTags}>
        <TextField  InputProps={style.InputProps} variant='outlined' label='Tag' id='tags' required></TextField>
        <Button type='submit'>Add Tag</Button>
        <Button onClick={() => setTagFormOpen(false)}>X</Button>
      </form>
      :<Fab style={{transform: 'scale(0.5)'}} variant='extended' onClick={() => setTagFormOpen(true)}><AddIcon sx={{fontSize: 20}}/> Tag</Fab>}
    </>
   );
}

export default TaskFromContent;