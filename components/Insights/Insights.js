import "./Insights.css";

function Insights({ transactions }) {
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  let maxCategory = "";
  let maxAmount = 0;

  for (let category in categoryMap) {
    if (categoryMap[category] > maxAmount) {
      maxAmount = categoryMap[category];
      maxCategory = category;
    }
  }

  return (
    <div className="insights">
      <h3>Insights</h3>
      <p>💸 Highest Spending Category: {maxCategory}</p>
<p>📊 Total Expenses: ₹ {maxAmount}</p>
<p>💡 Tip: Try reducing spending in {maxCategory}</p>
    </div>
  );
}

export default Insights;