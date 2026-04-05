import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Layout/Navbar";
import RoleToggle from "./components/RoleToggle/RoleToggle";
import Dashboard from "./components/Dashboard/Dashboard";
import Transactions from "./components/Transactions/Transactions";
import Insights from "./components/Insights/Insights";

import { transactions as initialData } from "./data/transactions";
import RecentActivity from "./components/Insights/RecentActivity";

function App() {
  const [role, setRole] = useState("viewer");

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : initialData;
  });

  const [darkMode, setDarkMode] = useState(true);

  // ✅ PASTE HERE
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className={darkMode ? "app-container dark" : "app-container"}>
  <Navbar 
  darkMode={darkMode}
  setDarkMode={setDarkMode}
  role={role}
  setRole={setRole}
/>
      

      <Dashboard 
  transactions={transactions} 
  darkMode={darkMode} 
/>
     <Transactions 
  transactions={transactions} 
  role={role} 
  setTransactions={setTransactions} 
/>
<RecentActivity transactions={transactions} />
      <Insights transactions={transactions} />

      
    </div>
  );
}

export default App;