import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
} from 'chart.js';
import { useEffect, useState } from 'react';

export const MyLine = (data) => {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    ChartJS.register(
      LineElement,
      PointElement,
      LinearScale,
      Title,
      CategoryScale,
      Tooltip
    );
    setIsRegistered(true);
  }, []);

  if (!isRegistered) {
    return <></>;
  }
  return (
    <div style={{ width: '150px', height: '150px' }}>
    <Line
      data={{
        labels: [
          '1-1-2024',
          '2-1-2024',
          '3-1-2024',
          '4-1-2024',
          '5-1-2024',
          '6-1-2024',
          '7-1-2024',
          '8-1-2024',
          '9-1-2024',
          '10-1-2024',
        ],
        datasets: [
          {
            data: [
              10,
              20,
              40,
              30,
              50,
              60,
              80,
              80,
              70,
              100,
            ],
            label: '',
            borderColor: 'green',
            backgroundColor: 'rgba(62, 149, 205, 0.3)',
            fill: true,
            tension: 0.1,
            pointRadius: 0,
          },
          {
            data: new Array(10).fill(40), // Baseline at y=50 (adjust as needed)
            label: 'Baseline',
            borderColor: 'lightgreen',
            borderDash: [5, 5], // Create a dashed effect
            borderWidth: 1.5, // Thinner dashed line
            fill: false, // Do not fill below this line
            pointRadius: 0, // Removes points on this line as well
          },
        ],
      }}
      options={{ 
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: '',
          },
        },
        scales: {
            x: {
              display: false,
              grid: {display: false,},
              ticks: {display: false,},
            },
            y: {
              display: false,
              grid: {display: false,},
              ticks: {display: false,},
            },
          },
       }}
    />
    </div>
  );
};