import { useState, useEffect } from 'react';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Main from './components/Main/index';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import './App.scss';

import { useAuth } from './hooks/useAuth';
// import { useAuth0 } from "@auth0/auth0-react";
import { setupAuth } from './lib/Collection';

// const useAuth = useAuth0;

const App = () => {
  const [authSetupStatus, setAuthSetupStatus ] = useState('loading');
  const { isAuthenticated, getAuthClaims} = useAuth();
  useEffect(() => { 
    const setup = async () => {
      const token = await getAuthClaims();
      // const token = await getIdTokenClaims().then(claims => claims.__raw).catch(err => {
      //   console.log("Something went wrong getting the auth claims", err);
      // });
      setupAuth(token);
      setAuthSetupStatus('setup-complete');

    }
    if (isAuthenticated) { setup(); }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  return (
    <>
      <Header />
      
      { ( authSetupStatus === 'setup-complete' ? 
        <Main />
        : "Loading"
      )}
      <Footer />
    </>
  );
}

export default App;
