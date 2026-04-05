import "./Transactions.css";

function TransactionList({ transactions, role, handleDelete }) {
  return (
    <div className="transaction-container">
      <h3>Transactions</h3>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>₹ {t.amount}</td>
              <td>{t.category}</td>
              <td className={t.type}>{t.type}</td>

              <td>
                {role === "admin" ? (
                  <button onClick={() => handleDelete(t.id)}>
                    Delete
                  </button>
                ) : (
                  <span style={{ opacity: 0.5 }}>View</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;