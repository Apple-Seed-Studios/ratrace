let time = 3000

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

let timeReducer = (state=time, action) => {
    switch(action.type){
        case "SET_TIME": return time = action.payload;
        case "DECREMENT_TIME": return state - 1000
        default: return state;
    }
}

module.exports = {
    setTime,
    timeReducer,
    decrementTime,
}