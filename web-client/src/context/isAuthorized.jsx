import { useSelector } from 'react-redux';
import { When } from 'react-if';

function IsAuthorized (props){

    let loggedIn = useSelector(state => state.loggedIn);

    return (<When condition={loggedIn}>
        {props.children}
    </When>)

}

export default IsAuthorized;