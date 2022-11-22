import { useSelector, useDispatch } from 'react-redux';
import { Fab, TextField, Button, Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import { useState, useEffect } from 'react';
import { addTotalTime } from '../../store/user'
import { decrementTime, setTime, endWork, endRest } from '../../store/timer';
import { convertTimeMilliseconds, convertTimeReadable } from '../../hooks/convertTime';
import PauseIcon from '@mui/icons-material/Pause';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';





const Timer = function () {

    let time = useSelector(state => state.time)
    let activeTask = useSelector(state => state.activeTask)
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
    let [textFieldProps, setTextFieldProps] =useState({})

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
    console.log(convertTimeMilliseconds(parseInt(splitRest[0]), parseInt(splitRest[1])))
    let payload = {
        workTime: convertTimeMilliseconds(parseInt(splitWork[0]), parseInt(splitWork[1])),
        restTime: convertTimeMilliseconds(parseInt(splitRest[0]), parseInt(splitRest[1])),
        workCycle: workCycle,
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

    useEffect(() => {
        if(activeTask){
            if(!timerOn){
            startTimer();
            }
        }
        //eslint-disable-next-line
    }, [activeTask])

    let skip = () => {
            if(workCycle){
            clearInterval(intervalId)
            dispatch(endWork())
            setWorkCycle(false);
            toggleTimerOn(false);
        } else{
            clearInterval(intervalId)
            dispatch(endRest())
            setWorkCycle(true);
            toggleTimerOn(false);
        }
    }

    let checkFormat = (e) => {
        e.preventDefault();
        let regex = /^[0-9]{2}[:][0-9]{2}$/m
        console.log(regex.test(e.target.value))
        if(regex.test(e.target.value) === true){
            setTextFieldProps({})
            console.log('this should be true')
        } 
        if(regex.test(e.target.value) === false){
            console.log('this should be false')
            setTextFieldProps({
                error:true,
                helperText:'Format 00:00',
            })
        }
    }

    return (<>
    {toggleEdit ? <>
        <form onSubmit={handleTimerSubmit}>
        <TextField {...textFieldProps} onChange={checkFormat} id='work_time' defaultValue={convertTimeReadable(time.defaultWork).minutesSeconds}/>
        <TextField onChange={checkFormat} id='rest_time' defaultValue={convertTimeReadable(time.defaultRest).minutesSeconds}/>
        <Button type='submit'>submit</Button>
        </form>
     </>: 
    workCycle ? <Typography variant='h5'>Work Cycle: {readableTime.minutesSeconds}</Typography>:
     <Typography variant='h5'>Rest Cycle: {readableTime.minutesSeconds}</Typography>}
    <Fab onClick={handleToggle} size='small'><EditIcon/></Fab>
    {timerOn ?<Fab size='small' onClick={stopTimer}><PauseIcon/></Fab>
    :<Fab size='small' onClick={startTimer}><PlayArrowIcon/></Fab>}
    <Fab size='small' onClick={() => skip()}><NextPlanIcon/></Fab>
    </>)
}

export default Timer;
