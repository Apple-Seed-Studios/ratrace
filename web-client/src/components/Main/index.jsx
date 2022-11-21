import Timer from '../Timer';
import TaskForm from '../TaskForm';
import TaskDisplay from '../TaskDisplay';
import LandingPage from '../LandingPage';
import { If, Then, Else } from 'react-if';
import './main.scss';

import { useAuth } from "../../hooks/useAuth";


function Main(props)
{
  const { isAuthenticated } = useAuth();
  return (
    <main className="main">
      <If condition={ isAuthenticated }>
        <Then>
          <TaskForm />
          <Timer />
          <TaskDisplay />
        </Then>
        <Else>
          <LandingPage />
        </Else>
      </If>
    </main>
  )
}

export default Main;
