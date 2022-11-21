import React from "react";
// importing `useAuth0`, because this is a functional component
import { useAuth } from "../../hooks/useAuth";
import { Button } from '@mui/material';

const LoginButton = () =>
{
  const { loginWithRedirect } = useAuth();

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
