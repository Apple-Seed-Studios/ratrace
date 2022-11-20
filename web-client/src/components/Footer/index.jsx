import { Box, Typography } from '@mui/material/';
import Copyright from './Copyright/index';
import './footer.scss';
import { useAuth0 } from "@auth0/auth0-react";

function Footer(props)
{
  const { isAuthenticated } = useAuth0();
  return (
    <Box 
      component="footer" 
      className="footer"
      sx={{ position: isAuthenticated ? "absolute": "relative"}}
    >
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Planting one seed at a time™
      </Typography>
      <Copyright />
    </Box>
  )
}

export default Footer;
