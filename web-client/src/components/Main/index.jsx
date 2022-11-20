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
    </main>
  )
}

export default Main;
