import { Tasks } from '../lib/Collection';

const tasks = new Tasks();
const initialState = [];


export const getTasks = () => async (dispatch) => {
  // let response = await axios.get(`${API_SERVER}/api/v1/tasks`);
  const data = await tasks.getIndex();
  dispatch({
    type: 'GET_TASKS',
    payload: data
  })
  // dispatch(setTask(data.results));
}

/*
export const setTask = (tasks) => {
  return {
    type: 'SET_TASK',
    payload: tasks,
  }
}
*/

export const addTaskPure = (payload) => {
  return {
    type: 'ADD_TASK',
    payload,
  };
}

const addTask = (payload) => async (dispatch) => {
  payload.completed = false;
  // let response = await axios.post(`${API_SERVER}/api/v1/tasks`, payload);
  const data = await tasks.create(payload);

  dispatch(addTaskPure(data));
}

export const updateTaskPure = (payload) => {
  return {
    type: 'UPDATE_TASK',
    payload,
  };
}

export const updateTask = (payload) => async (dispatch) => {
  // let response = await axios.put(`${API_SERVER}/api/v1/tasks/${payload._id}`, payload);
  const response = await tasks.update(payload);
  const data = response.data;
  dispatch(updateTaskPure(data));
}

export const deleteTaskPure = (payload) => {
  return {
    type: 'DELETE_TASK',
    payload: {_id: payload._id},
  };
}

export const deleteTask = (payload) => async (dispatch) => {
  const _id = payload._id;
  const response = await tasks.delete(_id);
  const data = response.data;
  if (data.acknowledged) {
    dispatch({
      type: 'DELETE_TASK',
      payload: {_id}
    });
  } else {
    console.error(`${_id} not deleted on server.`)
  }

}

const updateTaskReducer = (state, action) => {
  const tasks = [...state];
  if (action.type === 'UPDATE_TASK' && action) {
    const updatedTask = action.payload;
    const id = updatedTask._id;
    const idx = tasks.findIndex(t => t._id === id)
    if (idx > -1) {

      tasks[idx] = { ...tasks[idx], ...updatedTask };

    }
  }

  return tasks;
}

const deleteTaskReducer = (state, action) => {
  const tasks = state;
  return tasks.filter(t => t._id !== action.payload._id);
}

const taskReducer = (state = initialState, action) => {
  if(!action) return state;
  switch (action.type) {

    case 'GET_TASKS':
      return action.payload;

    case 'ADD_TASK':
      return [action.payload, ...state]

    case 'UPDATE_TASK':
      return updateTaskReducer(state, action);

    case 'DELETE_TASK':
      return deleteTaskReducer(state, action);

    default:
      return state;

  }
}

export { addTask, taskReducer };
