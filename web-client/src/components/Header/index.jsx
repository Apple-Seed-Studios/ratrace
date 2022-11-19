import AppBar from '@mui/material/AppBar';
import ShopIcon from '@mui/icons-material/Shop';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeButton from './ThemeButton';
import './header.scss';
import { Divider } from '@mui/material/'
import AvatarPic from './Avatar';
import { useAuth0 } from "@auth0/auth0-react";
import { When } from 'react-if';
import LogoutButton from '../Login/LogoutButton';

function Header(props)
{
  const { isAuthenticated } = useAuth0();
  return (
    <AppBar
      position="relative"
      className='header'
    >
      <Toolbar>
        <ShopIcon sx={ { mr: 2 } } />
        <Divider orientation='vertical' />
        <Typography
          variant="h6"
          color="inherit"
          noWrap
        >
          You're so dang productive :3
        </Typography>
        <div className='navLeftButtons'>
          <ThemeButton />
          <When condition={ isAuthenticated }>
            <AvatarPic />
            <LogoutButton/>
          </When>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
