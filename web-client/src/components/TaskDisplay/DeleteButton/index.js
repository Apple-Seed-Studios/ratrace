import ClearIcon from "@mui/icons-material/Clear";
import {
  IconButton,
} from '@mui/material'
export default function DeleteButton(deleteFunction){
  return(<>
    <IconButton onClick={() => deleteFunction()}>
    <ClearIcon />
  </IconButton>
  </>
  )
}