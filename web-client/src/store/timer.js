let time = {
    time: 10000,
}

let setTime = (payload) => {
    return {
        action: "SET_TIME",
        payload: payload,
    }
}

let decrementTime = (payload) => {
    return {
        action: "DECREMENT_TIME",
        payload: payload,
    }
}

let timeReducer = (state=time, action) => {
    switch(action.type){
        case "SET_TIME": return state.time = action.payload;
        case "DECREMENT_TIME": return state.time - 1000
        default: return state;
    }
}

module.exports = {
    setTime,
    timeReducer,
}