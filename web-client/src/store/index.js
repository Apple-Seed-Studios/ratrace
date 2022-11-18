import { combineReducers, createStore, applyMiddleware } from 'redux'
import { userReducer } from "./user";
import { taskReducer } from './tasks';
import thunk from 'redux-thunk';

const reducers = {
    loggedIn: userReducer,
    tasks: taskReducer,
}

export default createStore(combineReducers(reducers), applyMiddleware(thunk))