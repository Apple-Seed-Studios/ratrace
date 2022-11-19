import LandingPage from '../LandingPage';
import Timer from '../Timer';
import TaskForm from '../TaskForm';
import TaskDisplay from '../TaskDisplay';

import './main.scss';



function Main(props)
{
  return (
    <main className="main">
      <TaskForm />
      <Timer/>
      <TaskDisplay />
      <LandingPage />
    </main>
  )
}

export default Main;
