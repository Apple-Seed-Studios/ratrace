import React from "react";
// importing `useAuth0`, because this is a functional component
import { useAuth0 } from "@auth0/auth0-react";
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutButton = () =>
{
  const { logout } = useAuth0();

  return (
    <IconButton
      sx={ { ml: 1 } }
      color="inherit"
      variant="soft"
      onClick={ () => logout({ returnTo: window.location.origin }) }
    >
      <LogoutIcon />
    </IconButton>
  );
};

export default LogoutButton;
