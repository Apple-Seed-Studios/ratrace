import React from "react";
// importing `useAuth0`, because this is a functional component
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';

const LoginButton = () =>
{
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      style={ { width: "100px", margin: "auto" } }
      onClick={ () => loginWithRedirect() }
      variant="soft"
    >
      Sign in
    </Button>
  )
};

export default LoginButton;
