
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: ["Jan", "Feb", "Mar", "April", "May", "June"],
  datasets: [
    {
      label: "Money",
      data: [8.9, 7.8, 6.7, 8, 6, 5, 7.8, 5.8, 6],
      borderColor: "green",
      backgroundColor: "rgba(0, 128, 0, 0.2)",
      tension: 0.5,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      min: 2,
      max: 10,
      ticks: {
        stepSize: 2,
        callback: (value: any) => value + "k",
      },
    },
  },
};

const LineChart = () => (
  <Line data={data} options={options} className="h-full w-full"></Line>
);

export default LineChart;
