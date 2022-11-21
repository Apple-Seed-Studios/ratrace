

let time = {
    time: 5000,
    defaultWork: 5000,
    defaultRest: 5000,
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
            time: state.time,
            defaultWork: action.payload.defaultWork,
            defaultRest: action.payload.defaultRest,
        }
        case "DECREMENT_TIME": return {
            time: state.time - 1000,
            defaultWork: state.defaultWork,
            defaultRest: state.defaultRest,
        }
        case 'END_WORK': return {
            time: state.defaultRest,
            defaultWork: state.defaultWork,
            defaultRest: state.defaultRest,
        };
        case 'END_REST': return {
            time: state.defaultWork,
            defaultWork: state.defaultWork,
            defaultRest: state.defaultRest,
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