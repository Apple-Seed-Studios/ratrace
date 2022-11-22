import { useSelector, useDispatch } from 'react-redux';
import { Fab, TextField, Button} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import { useState, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { addTotalTime } from '../../store/user'
import { decrementTime, setTime, endWork, endRest } from '../../store/timer';
import { convertTimeMilliseconds, convertTimeReadable } from '../../hooks/convertTime';
import PauseIcon from '@mui/icons-material/Pause';





const Timer = function () {

    let time = useSelector(state => state.time)
    let audio = new Audio('../../alert.mp3')
    
    let [readableTime, setReadableTime] = useState({
        minutesSeconds: '',
        hoursMinutesSeconds:'',
    })

    let [toggleEdit, setToggleEdit] = useState(false);
    let [timerOn, toggleTimerOn] = useState(false);
    let [intervalId, setIntervalId] = useState();
    let [workCycle, setWorkCycle] = useState(true)
    let dispatch = useDispatch();

    let handleToggle = () => {
        setToggleEdit(!toggleEdit);
    }
    let startTimer = () => {
        toggleTimerOn(true);
        setIntervalId(setInterval(countDown, 1000))
    }
    let stopTimer = () => {
        toggleTimerOn(false)
        clearInterval(intervalId)
    } 
    let countDown = () => {
        dispatch(decrementTime());
        if(workCycle){dispatch(addTotalTime())};
    }
 let handleTimerSubmit = (e) => {
    e.preventDefault();
    let splitWork = e.target.work_time.value.split(':');
    let splitRest = e.target.rest_time.value.split(':');
    let payload = {
        workTime: convertTimeMilliseconds(splitWork[0], splitWork[1]),
        restTime: convertTimeMilliseconds(splitRest[0], splitRest[0]),
    }
    dispatch(setTime(payload));
    setToggleEdit(false)
 }
    useEffect(() => {
        if(time.time <= 0){
            if(workCycle){
            clearInterval(intervalId)
            dispatch(endWork())
            setWorkCycle(false);
            toggleTimerOn(false);
            audio.play();
        } else{
            clearInterval(intervalId)
            dispatch(endRest())
            setWorkCycle(true);
            toggleTimerOn(false);
            audio.play();
        }
        }
        setReadableTime(convertTimeReadable(time.time))
          //eslint-disable-next-line
    }, [time])

    return (<>
    {toggleEdit ? <>
        <form onSubmit={handleTimerSubmit}>
        <TextField id='work_time' defaultValue={convertTimeReadable(time.defaultWork).minutesSeconds}/>
        <TextField id='rest_time' defaultValue={convertTimeReadable(time.defaultRest).minutesSeconds}/>
        <Button type='submit'>submit</Button>
        </form>
     </>  
    : <h1>{readableTime.minutesSeconds}</h1>}
    <Fab onClick={handleToggle} size='small'><EditIcon/></Fab>
    {timerOn ?<Fab size='small' onClick={stopTimer}><PauseIcon/></Fab>
    :<Fab size='small' onClick={startTimer}><PlayArrowIcon/></Fab>}
  
    </>)
}

export default Timer;
