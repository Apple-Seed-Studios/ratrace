
const reduceTasks = (tasks) => {
  const visData = tasks.reduce((data, task) => {
    if (data[task.tag]) {
      data[task.tag] += !isNaN(task.tracked_time) ? task.tracked_time : 0;
    } else { 
      data[task.tag] = !isNaN(task.tracked_time) ? task.tracked_time : 0;
    }
    return data;
  }, {})
  return visData;
}

const createDataset = (visData, colors) => {
  const labels = Object.keys(visData);
  const data = Object.values(visData).map(ms => Math.floor(ms / 1000 / 60));
  return {
    labels,
    datasets: [
      {
        label: 'Time spent in minutes',
        data,
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ]
  };
}

export { reduceTasks, createDataset };