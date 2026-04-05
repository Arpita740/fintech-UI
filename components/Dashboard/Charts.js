import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Charts({ transactions, darkMode }) {

  const categoryMap = {};

  transactions.forEach((t) => {
    if (!categoryMap[t.category]) {
      categoryMap[t.category] = 0;
    }
    categoryMap[t.category] += t.amount;
  });

  const labels = Object.keys(categoryMap);
  const dataValues = Object.values(categoryMap);

  
  // 🔥 auto-generate more colors if needed
  const generateColors = (count) => {
  return Array.from({ length: count }, (_, i) =>
    `hsl(${(i * 360) / count}, 70%, 50%)`
  );
};

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: generateColors(labels.length),
        borderColor: darkMode ? "#cae7e3ff" : "#f6fafcff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "top",
        labels: {
          color: darkMode ? "#e5e7eb" : "#364253ff", // ✅ FIXED
          font: {
  size: 14,
  family: "Times New Roman",
}
        },
      },

      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ₹${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Pie data={data} options={options} />
    </div>
  );
}

export default Charts;