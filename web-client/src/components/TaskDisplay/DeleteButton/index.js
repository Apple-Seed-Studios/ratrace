import ClearIcon from "@mui/icons-material/Clear";
import {
  IconButton,
  Popover,
  Typography,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from 'react';
export default function DeleteButton({deleteFunction}){
  let [popoverOn, setPopoverOn] = useState(false);
  let [anchor, setAnchor] = useState(null)
  return(<>
    <IconButton onClick={(event) => {setPopoverOn(!popoverOn); setAnchor(event.target)}}>
      <Popover
      open={popoverOn}
      anchorEl={anchor}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      onClose={() => {setPopoverOn(!popoverOn); setAnchor(null)}}
      >
      <Typography sx={{ margin: 1}}> Delete Task? </Typography>
    <IconButton sx={{ marginLeft: 4}}onClick={() => deleteFunction()}>
      <DeleteForeverIcon/>
    </IconButton>
      </Popover>
    <ClearIcon />
  </IconButton>
  </>
  )
}