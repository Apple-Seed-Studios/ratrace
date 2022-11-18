
const loggedIn = false

const logIn = (payload) => async(dispatch) => {
    
    return {
        type: 'LOG_IN',
        payload: payload,
    }
}

const userReducer =(state=loggedIn, action) => {
    switch(action.type){
        case 'LOG_IN': return state = !state;
        default: return state;
    }
}
module.exports = {
    userReducer,
    logIn,
}