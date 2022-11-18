import { Box, Typography } from '@mui/material/';
import Copyright from './Copyright/index';
import './footer.scss';

function Footer(props)
{
  return (
    <Box component="footer" className='footer'>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        It's not a pyramid-scheme, I swear!™
      </Typography>
      <Copyright />
    </Box>
  )
}

export default Footer;
