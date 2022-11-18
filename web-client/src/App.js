import LandingPage from './components/LandingPage'
import { Provider } from 'react-redux';
import store from './store';
import TaskForm from './components/TaskForm'
import TaskDisplay from './components/TaskDisplay';

function App()
{
  return (<>
    <Provider store={ store }>
      <TaskForm />
      <TaskDisplay />
      <LandingPage />
    </Provider>
  </>);
}

export default App;
