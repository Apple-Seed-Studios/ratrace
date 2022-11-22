
const user = {
    totalTime: 0
}
const addTotalTime = (payload) => {
    return {
        type: "ADD_TOTAL_TIME",
        payload: payload,
    }
}

const userReducer = (state=user, action) => {
    switch(action.type){
        case "ADD_TOTAL_TIME": return {
            totalTime: state.totalTime + 1000,
        }
        default: return state;
    }
}

export {
    addTotalTime, 
    userReducer,
}