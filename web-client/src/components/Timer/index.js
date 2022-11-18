import { useSelector } from 'react-redux';
import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'

const Timer = function () {

    let time = useSelector(state => state.time)

    return (<>
    <h1>{time.time}</h1>
    <Fab><EditIcon/></Fab>
    </>)
}

export default Timer;