import React from "react";
// importing `useAuth0`, because this is a functional component
import { useAuth0 } from "@auth0/auth0-react";
import { IconButton } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const LoginButton = () =>
{
  const { loginWithRedirect } = useAuth0();

  return (
    <IconButton
      sx={ { ml: 1 } }
      color="inherit"
      variant="soft"
      onClick={ () => loginWithRedirect() }
    >
      <p>Login</p>
      <LoginIcon/>
    </IconButton>
  )
};

export default LoginButton;
