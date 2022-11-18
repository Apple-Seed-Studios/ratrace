import axios from 'axios';
const API_SERVER=process.env.REACT_APP_SERVER;

const initialState = {
    tasks: []
};



addItem = async (item) => {
    await axios.post(`${API_SERVER}/items`, item);
    this.getItems();
  }

  getItems = async () => {
    const response = await axios.get(`${API_SERVER}/items`);
    const items = response.data;
    this.setState({ items });
  }

  deleteItem = async (id) => {
    try {
      await axios.delete(`${API_SERVER}/items/${id}`);
      let updatedItems = this.state.items.filter(item => item._id !== id);
      this.setState({
        items: updatedItems,
      });
    } catch(err) {
      console.log('We have an error: ', err.response.data);
    }
  }

  export const getTask = () => async (dispatch) => {
    let response = await axios.get(`${API_SERVER}/api/v1/tasks`);
    let data = await response.json();
    console.log(data);
    dispatch(setTask(data.results));
  }
  
  export const setTask = (tasks) => {
    return {
      type: 'SET_TASK',
      payload: tasks,
    }
  }

const addTask = (payload) => {
    payload.completed = false;
    return {
        type: 'ADD_TASK',
        payload: payload,
    }

}


const taskReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET_TASK':
            return {
              ...state,
              electronics: state.electronics.map(electronics => {
                if(electronics.name === payload.name){
                  return {
                    name: electronics.name, 
                    quantity: electronics.quantity + 1 
                  }
                }
                return electronics
              }),
              totalQuantity: state.totalQuantity + 1,
            }
        case 'ADD_TASK': return [...state, action.payload]
        default: return state;
        // case 'SET_PRODUCTS': return [...state, action.payload]
        // default:return state;
  }
    }
}

module.exports = {
    addTask,
    taskReducer,
}