import axios from 'axios';

const API_SERVER = process.env.REACT_APP_SERVER;

const initialState = [];


export const getTasks = () => async (dispatch) => {
  let response = await axios.get(`${API_SERVER}/api/v1/tasks`);
  dispatch({
    type: 'GET_TASKS',
    payload: response.data
  })
  console.log(response.data);
  // dispatch(setTask(data.results));
}

export const setTask = (tasks) => {
  return {
    type: 'SET_TASK',
    payload: tasks,
  }
}

export const addTaskPure = (payload) => {
  return {
    type: 'ADD_TASK',
    payload,
  };
}

const addTask = (payload) => async (dispatch) => {
  payload.completed = false;
  let response = await axios.post(`${API_SERVER}/api/v1/tasks`, payload);
  console.log(response.data);
  const data = response.data;
  dispatch(addTaskPure(data));
}

export const updateTaskPure = (payload) => {
  return {
    type: 'UPDATE_TASK',
    payload,
  };
}

export const updateTask = (payload) => async (dispatch) => {
  let response = await axios.put(`${API_SERVER}/api/v1/tasks/${payload._id}`, payload);
  console.log(response.data);
  const data = response.data;
  dispatch(updateTaskPure(data));
}

export const deleteTask = (payload) => async (dispatch) => {
  let response = await axios.delete(`${API_SERVER}/api/v1/tasks`, payload);
  console.log(response.data);
  const data = response.data;
  dispatch({
    type: 'DELETE_TASK',
    payload: data,
  })

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

const taskReducer = (state = initialState, action) => {
  if(!action) return state;
  switch (action.type) {

    case 'GET_TASKS':
      return action.payload;

    case 'ADD_TASK': return [...state, action.payload]

    case 'UPDATE_TASK': return updateTaskReducer(state, action);

    case 'DELETE_TASK': return [...state, action.payload]
    default: return state;
  }
}

export { addTask, taskReducer };
