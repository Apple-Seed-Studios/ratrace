import Timer from '../Timer';
import TaskForm from '../TaskForm';
import TaskDisplay from '../TaskDisplay';
import LandingPage from '../LandingPage';
import { If, Then, Else } from 'react-if';
import './main.scss';

import { useAuth0 } from "@auth0/auth0-react";


function Main(props)
{
  const { isAuthenticated } = useAuth0();
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
