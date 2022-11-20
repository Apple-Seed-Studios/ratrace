import React from "react";
// importing `useAuth0`, because this is a functional component
import { useAuth0 } from "@auth0/auth0-react";
import { IconButton } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const LoginNavIcon = () =>
{
  const { loginWithRedirect } = useAuth0();

  return (
    <IconButton
      sx={ { ml: 1 } }
      variant="soft"
      aria-label="login button"
      onClick={ () => loginWithRedirect() }
    >
      <LoginIcon/>
    </IconButton>
  )
};

export default LoginNavIcon;
