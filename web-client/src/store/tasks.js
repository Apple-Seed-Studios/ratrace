const tasks = [];

const addTask = (payload) => {
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