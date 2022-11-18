const tasks = [];

const addTask = (payload) => {
    payload.completed = false;
    return {
        type: 'ADD_TASK',
        payload: payload,
    }

}


const taskReducer = (state=tasks, action) => {
    switch(action.type){
        case 'ADD_TASK': return [...state, action.payload]
        default: return state;
    }
}

module.exports = {
    addTask,
    taskReducer,
}