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
const sortedDates = Object.keys(dateMap).sort(
  (a, b) => new Date(a) - new Date(b)
);

const labels = sortedDates;
const dataValues = sortedDates.map((date) => dateMap[date]);
  

  const data = {
    labels,
   datasets: [
  {
    label: "Balance Trend",
    data: dataValues,
    borderColor: "#22c55e",
    backgroundColor: "rgba(34,197,94,0.15)",
    tension: 0.4,
    fill: true,

    pointRadius: 4,
    pointHoverRadius: 6,
  },
],
  };

 const options = {
  responsive: true,
  maintainAspectRatio: false,

  layout: {
    padding: 15,
  },

  plugins: {
    legend: {
      display: true,
      position: window.innerWidth < 600 ? "bottom" : "top",
      labels: {
        color: darkMode ? "#e5e7eb" : "#1f2937",
        font: {
          size: 13,
          family: "Times New Roman",
        },
      },
    },

    tooltip: {
      backgroundColor: darkMode ? "#020617" : "#ffffff",
      titleColor: darkMode ? "#e5e7eb" : "#111",
      bodyColor: darkMode ? "#cbd5f5" : "#333",
      borderColor: "#22c55e",
      borderWidth: 1,
    },
  },

  scales: {
    x: {
      ticks: {
        color: darkMode ? "#e5e7eb" : "#1f2937",

        // 🔥 reduce clutter on mobile
        maxRotation: window.innerWidth < 600 ? 0 : 45,
        minRotation: 0,
        autoSkip: true,
        maxTicksLimit: window.innerWidth < 600 ? 5 : 10,
      },
      grid: {
        display: false,
      },
    },

    y: {
      ticks: {
        color: darkMode ? "#e5e7eb" : "#1f2937",
      },
      grid: {
        color: darkMode ? "rgba(255,255,255,0.05)" : "#e5e7eb",
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