import { useContext } from 'react';
import { If, Then, Else } from 'react-if';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';
import { ThemeContext } from '../../../context/themeContext'

function ThemeButton()
{
  const context = useContext(ThemeContext);
  const theme = useTheme();
  return (
    <IconButton
      sx={ { ml: 1 } }
      color="inherit"
      onClick={ context.toggleDarkMode }
    >
      <If condition={ theme.palette.mode === 'dark' }>
        <Then>
          <Brightness7 />
        </Then>
        <Else>
          <Brightness4 />
        </Else>
      </If>
    </IconButton>
  )
}

export default ThemeButton;
