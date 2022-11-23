import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';

function ToggleCompleted(props)
{
  return (
    <FormControl component="fieldset" variant="standard">
      {/* <FormLabel component="legend">Show Completed Tasks</FormLabel> */}
      <FormGroup>
        <FormControlLabel
          control={
            <Switch onChange={ props.handleShowCompleted } name="showCompleted" />
          }
          label="Show Completed Tasks"
        />
      </FormGroup>
      <FormHelperText></FormHelperText>
    </FormControl>
  );
}

export default ToggleCompleted;
