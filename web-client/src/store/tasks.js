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


export const addTaskRaw = (axios) => (payload) => async (dispatch) => {
  payload.completed = false;
  let response = await axios.post(`${API_SERVER}/api/v1/tasks`, payload);
  console.log(response.data);
  const data = response.data;
  dispatch({
    type: 'ADD_TASK',
    payload: data,
  })
}

export const updateTask = (payload) => async (dispatch) => {
  let response = await axios.put(`${API_SERVER}/api/v1/tasks`, payload);
  console.log(response.data);
  const data = response.data;
  dispatch({
    type: 'UPDATE_TASK',
    payload: data,
  })

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


const taskReducer = (state = initialState, action) => {
  if(!action) return state;
  switch (action.type) {

    case 'GET_TASKS':
      return action.payload;

    case 'ADD_TASK': return [...state, action.payload]

    case 'UPDATE_TASK': return [...state, action.payload]

    case 'DELETE_TASK': return [...state, action.payload]
    default: return state;
  }
}


const addTask = addTaskRaw(axios);
export { addTask, taskReducer };