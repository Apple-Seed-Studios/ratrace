import { AppBar, Toolbar, Typography, Box, Stack } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Divider } from '@mui/material/'
import { useAuth0 } from "@auth0/auth0-react";
import { When } from 'react-if';
import AvatarPic from './Avatar';
import LogoutButton from '../Login/LogoutButton';
import ThemeButton from './ThemeButton';
import './header.scss';

function Header(props)
{
  const { isAuthenticated } = useAuth0();
  return (
    <Box sx={ {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      flexGrow: 1,
    } }>

      <AppBar
        position="relative"
        className='header'
      >
        <Toolbar>
          <ListAltIcon
            edge="start"
            aria-label="list logo"
            sx={ { mr: 2 } }
          />
          <Divider orientation='vertical' />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
          >
            🐀 Rat-race
          </Typography>
          <Box className='navRightButtons'>
            <Stack
              direction="row"
              spacing={ 1 }
              justifyContent="center"
            >
              <ThemeButton />
              <When condition={ isAuthenticated }>
                <AvatarPic />
                <LogoutButton />
              </When>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
