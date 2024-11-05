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

export const MyLine = ({ dataType = 'default', graphColor = 'green' }) => {
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

  // Define datasets based on dataType
  const dataSets = {
    default: [20, 30, 40, 50, 60, 70, 80, 90, 100],
    chatgpt: [62.27, 66.39, 81.33, 80.26, 79.3, 80.13, 79.55, 78.93, 78.9, 80.5],
    copilot: [65.0,64.81,65.37,71.52,72.6,72.29,72.35,72.07,71.52,70.83],
    llama: [63.6,65.74,65.73,64.87,64.3,64.87,65.45,68.5,70.45,70.33],
    gemini: [52.27, 53.39, 65.33, 62.26, 66.3, 69.13, 70.55, 71.93, 72.9, 73.5],
  };

  const selectedData = dataSets[dataType] || dataSets.default;

  return (
    <div style={{ width: '150px', height: '150px' }}>
      <Line
        data={{
          labels: [
            '1-2024', '2-2024', '3-2024', '4-2024', '5-2024',
            '6-2024', '7-2024', '8-2024', '9-2024', '10-2024',
          ],
          datasets: [
            {
              data: selectedData,
              label: '',
              borderColor: graphColor,
              backgroundColor: `${graphColor}80`, // semi-transparent color
              fill: true,
              tension: 0.1,
              pointRadius: 0,
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
              grid: { display: false },
              ticks: { display: false },
            },
            y: {
              grid: { display: false },
            },
          },
        }}
      />
    </div>
  );
};
