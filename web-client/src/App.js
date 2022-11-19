import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Main from './components/Main/index';

import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from './components/Login/LoginButton';
import LogoutButton from './components/Login/LogoutButton';


const App = () =>
{
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <Provider store={ store }>
      <Header />
      {
        isAuthenticated 
        ? <>
            <LogoutButton />
            <Main />
          </>
        : <LoginButton />
      }
      <Footer />
    </Provider>
  );
}

export default App;
