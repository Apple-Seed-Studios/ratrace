
let activeTask = null;

let setActiveTask = (payload) => {
    return {
        type: 'ACTIVE_TASK',
        payload: payload,
    }
}

let activeTaskReducer = (state=activeTask, action) => {
    switch(action.type){
        case "SET_TIME": return null;
        case 'END_WORK': return null;
        case 'END_REST': return null;
        case "ACTIVE_TASK": return action.payload
        default: return state;
    }
}