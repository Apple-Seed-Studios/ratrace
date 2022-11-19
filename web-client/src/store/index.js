import { combineReducers, createStore, applyMiddleware } from 'redux'
import { userReducer } from "./user";
import { taskReducer } from './tasks';
import { timeReducer } from './timer';
import thunk from 'redux-thunk';

const reducers = {
    loggedIn: userReducer,
    tasks: taskReducer,
    time: timeReducer,
}

export default createStore(combineReducers(reducers), applyMiddleware(thunk))