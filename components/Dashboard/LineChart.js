import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function LineChart({ transactions, darkMode }) {
  // 👉 group by date
  const dateMap = {};

  transactions.forEach((t) => {
    const date = t.date;

    if (!dateMap[date]) {
      dateMap[date] = 0;
    }

    // expense negative, income positive
    dateMap[date] += t.type === "expense" ? -t.amount : t.amount;
  });

  const labels = Object.keys(dateMap);
  const dataValues = Object.values(dateMap);

  const data = {
    labels,
    datasets: [
      {
        label: "Balance Trend",
        data: dataValues,
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        labels: {
          color: darkMode ? "#e5e7eb" : "#1f2937",
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: darkMode ? "#e5e7eb" : "#1f2937",
        },
      },
      y: {
        ticks: {
          color: darkMode ? "#e5e7eb" : "#1f2937",
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;