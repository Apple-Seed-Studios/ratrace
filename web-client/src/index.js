import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import auth0 dependencies
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={ process.env.REACT_APP_AUTH_DOMAIN }
    clientId={ process.env.REACT_APP_AUTH_CLIENT_ID }
    redirectUri={ process.env.REACT_APP_AUTH_REDIRECT_URI }
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
