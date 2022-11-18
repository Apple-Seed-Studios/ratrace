import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Main from './components/Main/index';

function App()
{
  return (<>
    <Provider store={ store }>
      <Header />
      <Main />
      <Footer />
    </Provider>
  </>);
}

export default App;
