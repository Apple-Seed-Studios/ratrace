import { useSelector, useDispatch } from 'react-redux';
import { Fab, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import { useState, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
//import { decrementTime, setTime } from '../../store/timer';
import { decrementTime } from '../../store/timer';
import PauseIcon from '@mui/icons-material/Pause';


const Timer = function () {

    let time = useSelector(state => state.time)

    let [toggleEdit, setToggleEdit] = useState(false);
    let [intervalId, setIntervalId] = useState();
    let dispatch = useDispatch();

    let handleToggle = () => {
        setToggleEdit(!toggleEdit);
    }
    let startTimer = () => {
        setIntervalId(setInterval(countDown, 1000))
    }
    let stopTimer = () => {
        clearInterval(intervalId)
    } 
    let countDown = () => {
        dispatch(decrementTime());
    }
    useEffect(() => {
        if(time <= 0){
            clearInterval(intervalId)
        }
    }, [time, intervalId])



    let convertTime = (milliseconds) => {
        let totalSeconds = milliseconds /1000;
        let totalMinutes = Math.floor(totalSeconds / 60)
        let leftOverSeconds = Math.floor(totalSeconds % 60)
        return totalMinutes + ':' + leftOverSeconds;
    }

    return (<>
    {toggleEdit ? <TextField  defaultValue={convertTime(time)}/>  : <h1>{convertTime(time)}</h1>}
    <Fab onClick={handleToggle} size='small'><EditIcon/></Fab>
    <Fab size='small' onClick={startTimer}><PlayArrowIcon/></Fab>
    <Fab size='small' onClick={stopTimer}><PauseIcon/></Fab>
    </>)
}

export default Timer;