import LandingPage from '../LandingPage';

import TaskForm from '../TaskForm';

import TaskDisplay from '../TaskDisplay';

import './main.scss';



function Main(props)
{
  return (
    <main className="main">
      <TaskForm />
      <TaskDisplay />
      <LandingPage />
    </main>
  )
}

export default Main;
