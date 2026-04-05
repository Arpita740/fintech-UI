function RecentActivity({ transactions }) {
  const recent = [...transactions].slice(-3).reverse();

  return (
    <div className="activity">
      <h3>Recent Activity</h3>
      {recent.map((t) => (
        <div key={t.id} className="activity-item">
          <span>{t.category}</span>
          <span className={t.type}>
            {t.type === "expense" ? "-" : "+"} ₹{t.amount}
          </span>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;