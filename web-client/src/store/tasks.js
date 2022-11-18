const tasks = [];

const addTask = (payload) => {
    payload.completed = false;
    return {
        type: 'ADD_TASK',
        payload: payload,
    }

}

const taskReducer = (state=tasks, action) => {
    if (!action) return state;
    switch(action.type){
        case 'ADD_TASK': return [...state, action.payload]
        default: return state;
    }
}

export { addTask, taskReducer };