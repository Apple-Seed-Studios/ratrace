let activeTask = null;

let setActiveTask = (payload) => {
    return {
        type: 'ACTIVE_TASK',
        payload: payload,
    }
}

let activeTaskReducer = (state=activeTask, action) => {
    switch(action.type){
        case "SET_TIME":
        return null
        case 'END_WORK':
        return null;
        case 'END_REST': 
        return null;
        case "ACTIVE_TASK":
        return action.payload
        case "DECREMENT_TIME": if(state){
            console.log(state)
            return {
                //task_name: state.task_name,
                //task_description: state.task_description,
                //__v: state.__v,
                //_id: state._id,
                //completed:state.completed,
                //tags: state.tags,
                ...state,
                tracked_time: state.tracked_time + 1000,
            } 
        } else {return null};
        default: return state;
    }
}

export {
    setActiveTask,
    activeTaskReducer,
}