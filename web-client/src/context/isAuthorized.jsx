import { useSelector } from 'react-redux';
import { When } from 'react-if';
import { useAuth0 } from "@auth0/auth0-react";

function IsAuthorized(props)
{
    const { isAuthenticated } = useAuth0();
    let loggedIn = useSelector(state => state.loggedIn);

    return (
        <When condition={ loggedIn }>
            { props.children }
        </When>)
}

export default IsAuthorized;
