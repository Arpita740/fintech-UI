import "./Dashboard.css";

function SummaryCards({ transactions }) {
  const safeData = transactions || [];

  const income = safeData
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = safeData
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="cards">
      <div className="card">
        <h4>Total Balance</h4>
        <p>₹ {balance}</p>
      </div>

      <div className="card">
        <h4>Income</h4>
        <p>₹ {income}</p>
      </div>

      <div className="card">
        <h4>Expenses</h4>
        <p>₹ {expense}</p>
      </div>
    </div>
  );
}

export default SummaryCards;