import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

function Progress(props) {

  const chartDiv = useRef(null);

  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
  };

  useEffect(() => {
    if (chartDiv) {
      // const myChart = 
      console.log(chartDiv);
      new Chart(chartDiv, config);
    }
  })




  return (
    <>
      <h2>Your total progress...</h2>
      <canvas ref={chartDiv}>
      </canvas>

    </>
  )
}

export default Progress;