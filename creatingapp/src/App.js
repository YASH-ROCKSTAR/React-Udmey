import "./App.css";
// import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expense";
function App() {
  const expenses = [
    { title: "Toilet Paper", amount: 94.67, date: new Date(2022, 6, 16) },
    { title: "New TV", amount: 799.67, date: new Date(2022, 7, 16) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2022, 8, 16) },
    { title: "New Desk(wooden)", amount: 450, date: new Date(2022, 9, 16) },
  ];
  return (
    <div className="App">
      <h2>Let's Get Started</h2>
      <Expense items={expenses}/>
    </div>
  );
}

export default App;
