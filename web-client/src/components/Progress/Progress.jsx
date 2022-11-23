import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../store/tasks';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { setupAuth } from '../../lib/Collection';
import { useAuth } from '../../hooks/useAuth';

// import { tasks } from '../../__fixtures__';
import { reduceTasks, createDataset } from './reduce-tasks';

// const data = createDataset(reduceTasks(tasks));

ChartJS.register(ArcElement, Tooltip, Legend);

const emptyDataSet = {
  labels: [],
  datasets: [
    {
      label: 'Tasks',
      data: [],
    }
  ]
};

export function Progress() {
  const [visData, setVisData] = useState(emptyDataSet);
  const [authSetupStatus, setAuthSetupStatus] = useState('loading');
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  console.log("tasks", tasks)

  const { isAuthenticated, getAuthClaims } = useAuth();
  useEffect(() => {
    const setup = async () => {
      const token = await getAuthClaims();
      setupAuth(token);
      setAuthSetupStatus('setup-complete');

    }
    if (isAuthenticated) { setup(); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ isAuthenticated ])
  useEffect(() => {
    if (isAuthenticated) {
      const loadTasks = async () => {
        await dispatch(getTasks());
        console.log("loaded tasks")
      };
      loadTasks();
    }
  //eslint-disable-next-line
  }, [authSetupStatus]);
  useEffect(() => { 
    const data = createDataset(reduceTasks(tasks));
    console.log(data)
    setVisData(data);
  }, [tasks]);

  return <div>
    {
      visData && tasks.length>1 ?
        <Doughnut data={visData} />
        : ''
    }
   </div>
  
}
