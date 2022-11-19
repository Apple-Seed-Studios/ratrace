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

const appReducer = combineReducers(reducers)

const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
}

export default createStore(rootReducer, applyMiddleware(thunk))