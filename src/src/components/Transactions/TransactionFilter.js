import "./Transactions.css";

function TransactionFilter({ setSearch }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search category..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default TransactionFilter;