'use client';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  stats: {
    [key: string]: number;
  };
  label: string;
}

export default function RadarChart({ stats, label }: RadarChartProps) {
  const data = {
    labels: Object.keys(stats),
    datasets: [
      {
        label: label,
        data: Object.values(stats),
        backgroundColor: 'rgba(77, 238, 234, 0.2)',
        borderColor: '#4DEEEA',
        borderWidth: 2,
        pointBackgroundColor: '#4DEEEA',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#4DEEEA',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: '#fff',
          font: {
            size: 12,
          },
        },
        ticks: {
          display: false,
          stepSize: 2,
        },
        min: 0,
        max: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Radar data={data} options={options} />;
}
