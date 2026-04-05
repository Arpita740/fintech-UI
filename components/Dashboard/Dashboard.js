import SummaryCards from "./SummaryCards";
import Charts from "./Charts";
import "./Dashboard.css";

function Dashboard({ transactions, darkMode }) {
  return (
    <div className="dashboard-layout">
      
      {/* LEFT SIDE */}
      <div className="left">
        <SummaryCards transactions={transactions} />
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <Charts transactions={transactions} darkMode={darkMode} />
      </div>

    </div>
  );
}

export default Dashboard;