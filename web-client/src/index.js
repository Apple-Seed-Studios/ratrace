import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'

// custom MUI theme context
import Theme from '../src/context/themeContext';

import CssBaseline from '@mui/material/CssBaseline'; // normalizes/resets most css defaults, except some useful ones

// import auth0 dependencies
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={ process.env.REACT_APP_AUTH_DOMAIN }
      clientId={ process.env.REACT_APP_AUTH_CLIENT_ID }
      redirectUri={ process.env.REACT_APP_AUTH_REDIRECT_URI }
    >
      <Theme>
        <CssBaseline enableColorScheme />
        <App />
      </Theme>
    </Auth0Provider>
  </React.StrictMode>
);
