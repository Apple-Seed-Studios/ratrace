import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.scss'

import Theme from '../src/context/themeContext'; // custom MUI theme context

import CssBaseline from '@mui/material/CssBaseline'; // normalizes/resets most css defaults, except some useful ones

// Auth0 Context/Provider
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={ process.env.REACT_APP_AUTH_DOMAIN }
      clientId={ process.env.REACT_APP_AUTH_CLIENT_ID }
      redirectUri={ process.env.REACT_APP_AUTH_REDIRECT_URI }
    >
    <Provider store={ store }>
      <Theme>
        <CssBaseline enableColorScheme />
        <App />
      </Theme>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
