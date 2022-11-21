import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { When } from 'react-if';

const Login = () =>
{
    const { user, isAuthenticated, isLoading } = useAuth();

    if (isLoading)
    {
        return <div>Loading ...</div>;
    }
    return (
        <When condition={ isAuthenticated }>
            <>
                <div className="login">
                    <img
                        src={ user.picture } referrerPolicy="no-referrer"
                        alt={ user.picture }
                    >
                    </img>
                    <h2>{ user.name }</h2>
                    <p>{ user.email }</p>
                </div>
            </>
        </When>
    )
    )
}

export default Login;
