import { Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
function Charts({ transactions, darkMode }) {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  // 🔥 handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categoryMap = {};

  transactions.forEach((t) => {
    if (!categoryMap[t.category]) {
      categoryMap[t.category] = 0;
    }
    categoryMap[t.category] += t.amount;
  });

  const labels = Object.keys(categoryMap);
  const dataValues = Object.values(categoryMap);

  // 🎨 COLORS
  const generateColors = (count) => {
    return Array.from({ length: count }, (_, i) =>
      `hsl(${(i * 360) / count}, 65%, ${darkMode ? "55%" : "50%"})`
    );
  };

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: generateColors(labels.length),
        borderColor: darkMode ? "#0f172a" : "#ffffff",
        borderWidth: 2,
        hoverOffset: isMobile ? 6 : 12, // 🔥 smaller on mobile
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    layout: {
      padding: isMobile ? 10 : 20,
    },

    plugins: {
      legend: {
        position: isMobile ? "bottom" : "right",

        labels: {
          color: darkMode ? "#e5e7eb" : "#1f2937",
          font: {
            size: isMobile ? 11 : 14,
            family: "Times New Roman",
            weight: "500",
          },
          padding: isMobile ? 10 : 15,
          usePointStyle: true,
          boxWidth: isMobile ? 8 : 12,
        },
      },

      tooltip: {
        backgroundColor: darkMode ? "#020617" : "#ffffff",
        titleColor: darkMode ? "#e5e7eb" : "#111",
        bodyColor: darkMode ? "#cbd5f5" : "#333",
        borderColor: "#22c55e",
        borderWidth: 1,
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