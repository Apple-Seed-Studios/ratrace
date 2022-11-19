

let time = {
    minutes: 0,
    seconds: 3,
    defaultWorkMinutes: 1,
    defaultWorkSeconds: 3,
    defaultRestMinutes: 1,
    defaultRestSeconds: 0,
}

let setTime = (payload) => {
    return {
        type: "SET_TIME",
        payload: payload,
    }
}

let decrementTime = (payload) => {
    return {
        type: "DECREMENT_TIME",
        payload: payload,
    }
}

let endWork = (payload) => {
    return {
        type: "END_WORK",
        payload:payload,
    }
}
let endRest = (payload) => {
    return {
        type: "END_REST",
        payload:payload,
    }
}

let timeReducer = (state=time, action) => {
    switch(action.type){
        case "SET_TIME": return {
            minutes: action.payload.work_minutes,
            seconds: action.payload.work_seconds,
            defaultWorkMinutes: action.payload.work_minutes,
            defaultWorkSeconds: action.payload.work_seconds,
            defaultRestMinutes: action.payload.rest_minutes,
            defaultRestSeconds: action.payload.rest_seconds,
        };
        case "DECREMENT_TIME": let newState = {
            minutes: state.minutes,
            seconds: state.seconds - 1,
            defaultWorkMinutes: state.defaultWorkMinutes,
            defaultWorkSeconds: state.defaultWorkSeconds,
            defaultRestMinutes: state.defaultRestMinutes,
            defaultRestSeconds: state.defaultRestSeconds,
        }
        if(newState.seconds < 0){
            newState = {
                minutes: state.minutes -1,
                seconds: 59,
                defaultWorkMinutes: state.defaultWorkMinutes,
                defaultWorkSeconds: state.defaultWorkSeconds,
            }
        }
        return newState;
        case 'END_WORK': return {
            minutes: state.defaultRestMinutes,
            seconds: state.defaultRestSeconds,
            defaultWorkMinutes: state.defaultWorkMinutes,
            defaultWorkSeconds: state.defaultWorkSeconds,
            defaultRestMinutes: state.defaultRestMinutes,
            defaultRestSeconds: state.defaultRestSeconds,
        };
        case 'END_REST': return {
            minutes: state.defaultWorkMinutes,
            seconds: state.defaultWorkSeconds,
            defaultWorkMinutes: state.defaultWorkMinutes,
            defaultWorkSeconds: state.defaultWorkSeconds,
            defaultRestMinutes: state.defaultRestMinutes,
            defaultRestSeconds: state.defaultRestSeconds,
        };
        default: return state;
    }
}

module.exports = {
    setTime,
    timeReducer,
    decrementTime,
    endWork,
    endRest,
}