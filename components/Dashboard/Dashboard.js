import SummaryCards from "./SummaryCards";
import Charts from "./Charts";
import LineChart from "./LineChart"; // 👈 add
import "./Dashboard.css";

function Dashboard({ transactions, darkMode }) {
  return (
    <div className="dashboard-layout">

      <div className="left">
        <SummaryCards transactions={transactions} />
      </div>

      <div className="right">
        <Charts transactions={transactions} darkMode={darkMode} />
        <LineChart transactions={transactions} darkMode={darkMode} /> {/* 👈 add */}
      </div>

    </div>
  );
}

export default Dashboard;