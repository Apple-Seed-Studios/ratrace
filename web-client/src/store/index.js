import { combineReducers, createStore, applyMiddleware } from 'redux'
import { userReducer } from "./user";
import thunk from 'redux-thunk';

const reducers = {
    loggedIn: userReducer,
}

export default createStore(combineReducers(reducers), applyMiddleware(thunk))