import axios from 'axios';

const API_SERVER=process.env.REACT_APP_SERVER;

const initialState = [];




// addItem = async (item) => {
//     await axios.post(`${API_SERVER}/items`, item);
//     this.getItems();
//   }

//   getItems = async () => {
//     const response = await axios.get(`${API_SERVER}/items`);
//     const items = response.data;
//     this.setState({ items });
//   }

//   deleteItem = async (id) => {
//     try {
//       await axios.delete(`${API_SERVER}/items/${id}`);
//       let updatedItems = this.state.items.filter(item => item._id !== id);
//       this.setState({
//         items: updatedItems,
//       });
//     } catch(err) {
//       console.log('We have an error: ', err.response.data);
//     }
//   }

  export const getTasks = () => async (dispatch) => {
    let response = await axios.get(`${API_SERVER}/api/v1/tasks`);
    dispatch({
      type: 'GET_TASK',
      payload:response.data
    })
    let data = await response.json();
    console.log(data);
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
    dispatch ({
        type: 'ADD_TASK',
        payload: data,
    })

}


const taskReducer = (state=initialState, action) => {
    if(!action) return state;
    switch(action.type){
        // case 'SET_TASK':
        //     return {
        //       ...state,
        //       electronics: state.electronics.map(electronics => {
        //         if(electronics.name === payload.name){
        //           return {
        //             name: electronics.name, 
        //             quantity: electronics.quantity + 1 
        //           }
        //         }
        //         return electronics
        //       }),
        //       totalQuantity: state.totalQuantity + 1,
        //     }

            case 'GET_TASK':
            return [
              ...state,
             action.payload,
            ]

        case 'ADD_TASK': return [...state, action.payload]
        default: return state;
        // case 'SET_PRODUCTS': return [...state, action.payload]
        // default:return state;
  }
    }


const addTask = addTaskRaw(axios);
export { addTask, taskReducer };