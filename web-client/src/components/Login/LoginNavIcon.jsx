import React from "react";
// importing `useAuth0`, because this is a functional component
import { useAuth } from "../../hooks/useAuth";
import { IconButton } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const LoginNavIcon = () =>
{
  const { loginWithRedirect } = useAuth();

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
