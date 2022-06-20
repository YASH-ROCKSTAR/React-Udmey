import React ,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
function Expense(props) {
  const [FilterYear, setFilterYear] = useState('2020');
   
  const filterChangeHandler = selectedYear =>{
      // console.log('Expenses.js');
      setFilterYear(selectedYear);
  }
  return (
    <div className="App">
      <ExpenseFilter selected={FilterYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </div>
  )
}

export default Expense