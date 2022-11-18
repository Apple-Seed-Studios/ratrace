import AppBar from '@mui/material/AppBar';
import ShopIcon from '@mui/icons-material/Shop';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeButton from './ThemeButton';
import './header.scss';
import { Divider } from '@mui/material/'

function Header(props)
{
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
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
