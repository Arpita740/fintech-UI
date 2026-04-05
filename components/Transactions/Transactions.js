import { useState } from "react";
import TransactionList from "./TransactionList";
import TransactionFilter from "./TransactionFilter";
import "./Transactions.css";

function Transactions({ transactions, role, setTransactions }) {
  const [search, setSearch] = useState("");

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  // 🔍 Filter
  const filteredData = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ ADD FUNCTION
  const handleAdd = () => {
    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    if (!category) {
      alert("Enter category");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      amount: Number(amount),
      category,
      type,
    };

    setTransactions([...transactions, newTransaction]);

    setAmount("");
    setCategory("");
    setType("expense");
  };

  // ✅ DELETE FUNCTION
  const handleDelete = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  return (
    <div>
      <TransactionFilter setSearch={setSearch} />

      {/* ADMIN FORM */}
      {role === "admin" && (
        <div className="add-form">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <button onClick={handleAdd}>Add</button>
        </div>
      )}

      <TransactionList
        transactions={filteredData}
        role={role}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Transactions;