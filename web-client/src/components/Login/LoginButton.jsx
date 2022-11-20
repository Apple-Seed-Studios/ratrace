import React from "react";
// importing `useAuth0`, because this is a functional component
import { useAuth0 } from "@auth0/auth0-react";
import { IconButton, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const LoginButton = () =>
{
  const { loginWithRedirect } = useAuth0();

  return (
    // icon button below
    // <IconButton
    //   sx={ { ml: 1 } }
    //   color="inherit"
    //   variant="soft"
    //   onClick={ () => loginWithRedirect() }
    // >
    //   <LoginIcon/>
    // </IconButton>
    
    // 
    <Button
      variant="outlined"
      onClick={ () => loginWithRedirect() }
    >
      Login/create account ...something?
    </Button>
  )
};

export default LoginButton;
