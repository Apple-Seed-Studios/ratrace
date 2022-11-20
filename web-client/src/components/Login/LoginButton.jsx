import React from "react";
// importing `useAuth0`, because this is a functional component
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@mui/material';

const LoginButton = () =>
{
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="contained"
      color="success"
      size="large"
      onClick={ () => loginWithRedirect() }
    >
      Get Started
    </Button>
  )
};

export default LoginButton;
