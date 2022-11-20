import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Main from './components/Main/index';
import LandingPage from './components/LandingPage';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './components/Login/LoginButton';
import { If, Then, Else } from 'react-if';
import './App.scss';


const App = () =>
{
  const { isAuthenticated } = useAuth0();

  return (
    <Provider store={ store }>
      <Header />
      <If condition={ isAuthenticated }>
        <Then>
          <Main />
        </Then>
        <Else>
          <LandingPage />
          <LoginButton />
        </Else>
      </If>
      <Footer />
    </Provider>
  );
}

export default App;
