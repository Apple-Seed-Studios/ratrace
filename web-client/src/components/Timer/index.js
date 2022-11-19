import { useSelector, useDispatch } from 'react-redux';
import { Fab, TextField, Button} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import { useState, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { decrementTime, setTime, endWork, endRest } from '../../store/timer';
import PauseIcon from '@mui/icons-material/Pause';




const Timer = function () {

    let time = useSelector(state => state.time)
    let audio = new Audio('../../alert.mp3')

    let [toggleEdit, setToggleEdit] = useState(false);
    let [intervalId, setIntervalId] = useState();
    let [workCycle, setWorkCycle] = useState(true)
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
 let handleTimerSubmit = (e) => {
    e.preventDefault();
    let splitWork = e.target.work_time.value.split(':');
    let splitRest = e.target.rest_time.value.split(':');
    let payload = {
        work_minutes: parseInt(splitWork[0]),
        work_seconds: parseInt(splitWork[1]),
        rest_minutes: parseInt(splitRest[0]),
        rest_seconds: parseInt(splitRest[1]),
    }
    dispatch(setTime(payload));
    setToggleEdit(false)
 }
    useEffect(() => {
        if(time.seconds <= 0 && time.minutes <= 0){
            if(workCycle){
            clearInterval(intervalId)
            dispatch(endWork())
            setWorkCycle(false);
            audio.play();
        } else{
            clearInterval(intervalId)
            dispatch(endRest())
            setWorkCycle(true);
            audio.play();
        }
        }
    }, [time, intervalId, dispatch, workCycle])

    return (<>
    {toggleEdit ? <>
        <form onSubmit={handleTimerSubmit}>
        <TextField id='work_time' defaultValue={time.defaultWorkMinutes + ":" + time.defaultWorkSeconds}/>
        <TextField id='rest_time' defaultValue={time.minutes + ":" + time.seconds}/>
        <Button type='submit'>submit</Button>
        </form>
     </>  
    : <h1>{time.minutes + ':' + time.seconds}</h1>}
    <Fab onClick={handleToggle} size='small'><EditIcon/></Fab>
    <Fab size='small' onClick={startTimer}><PlayArrowIcon/></Fab>
    <Fab size='small' onClick={stopTimer}><PauseIcon/></Fab>
    </>)
}

export default Timer;