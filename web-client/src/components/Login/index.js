import Button from '@mui/material/Button'
import { TextField } from '@mui/material';
import  { logIn } from '../../store/user';
import { useDispatch } from 'react-redux'


const Login = function () {
    
    let dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn(e.target.username.value, e.target.password.value))
    }

    return (<>
    <form onSubmit={onSubmit}>
    <TextField
     variant='outlined'
     id='username'
     label='Username'
     />
    <TextField
    variant='outlined'
    id='password'
    label='Password'
    type='password'
    />
    <Button variant='contained' type='submit'>Login</Button>
    </form>
    <Button>Sign Up</Button>
    <h1>hi</h1>
    </>)
}

export default Login;