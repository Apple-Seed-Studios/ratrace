import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useState, createContext } from "react";

export const ThemeContext = createContext()

function Theme(props)
{
  const [ darkMode, setDarkMode ] = useState(true)
  const theme = createTheme({
    // can create custom, site-wide themes here
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () =>
  {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeContext.Provider value={ { darkMode, toggleDarkMode } }>
      <ThemeProvider theme={ theme }>
        { props.children }
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Theme;
