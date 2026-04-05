
# 💰 Finance Dashboard UI

A clean and interactive finance dashboard built using React that helps users track transactions, analyze spending patterns, and manage financial data effectively.

---

## 🚀 Live Demo
👉 https://arpita740.github.io/fintech-UI/

---

## 📌 Features

### 📊 Dashboard
- Displays Total Balance, Income, and Expenses
- Category-wise spending visualization using Pie Chart
- 📈 Time-based balance trend using Line Chart
- Dynamic updates based on transactions

### 💳 Transactions
- Add transactions (Admin only)
- Delete transactions (Admin only)
- Search transactions by category
- Real-time UI updates

### 🔐 Role-Based UI
- Viewer → Can only view data
- Admin → Can add and delete transactions
- Role switch using toggle

### 📈 Insights
- Shows highest spending category
- Displays useful financial observations

### 🕒 Recent Activity
- Shows latest transactions
- Quick view of recent financial actions

### 🌙 Dark / Light Mode
- Toggle between themes
- Clean UI for both modes

### 💾 Local Storage
- Data persists after refresh

---

## ✨ Highlights
- Real-time data updates with React state
- Role-based UI simulation (Admin vs Viewer)
- Dynamic chart rendering with auto-generated colors
- Clean and responsive dashboard layout
## 🛠️ Tech Stack

- React (Hooks)
- JavaScript (ES6)
- CSS (Custom styling)
- Chart.js

```
## 📂 Project Structure
```finance-dashboard/
│
├── src/
│ ├── components/
│ │ ├── Dashboard/
│ │ ├── Transactions/
│ │ ├── Insights/
│ │ ├── Layout/
│ │ └── RoleToggle/
│ │
│ ├── data/
│ ├── App.js
│ └── index.js
│
├── public/
├── package.json
```

## ⚙️ Setup

```bash
git clone https://github.com/Arpita740/fintech-UI.git
cd fintech-UI
npm install
npm start

