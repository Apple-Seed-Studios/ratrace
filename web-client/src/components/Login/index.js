import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () =>
{
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading)
    {
        return <div>Loading ...</div>;
    }
    return (
        isAuthenticated && (
            <>
                <div className="login">
                    <h1>User Profile</h1>
                    <img
                        src={ user.picture } referrerPolicy="no-referrer"
                        alt={ user.picture }
                    >
                    </img>
                    <h2>{ user.name }</h2>
                    <p>{ user.email }</p>
                </div>
            </>
        )
    )
}

export default Login;
