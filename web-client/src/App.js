import Login from './components/Login/index';
import LandingPage from './components/LandingPage'
import { Provider } from 'react-redux';
import store from './store';
import IsAuthorized from './context/isAuthorized';

function App() {
  return (<>
  <Provider store={store}>
  <Login/>
  <IsAuthorized>
  <LandingPage/>
  </IsAuthorized>
  </Provider>
  </>);
}

export default App;
