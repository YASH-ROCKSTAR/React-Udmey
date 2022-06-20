import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
     
    const [entertedTitle,setEntertedTitle]=useState('');
    const [entertedAmount,setEntertedAmount]=useState('');
    const [entertedDate,setEntertedDate]=useState('');

    //we ca use usestate once instead of three times
    // const[userInput,setUserInput]=useState({
    //     entertedTitle:'',
    //     entertedAmount:'',
    //     entertedDate:''
    // })


    const titleChangeHandler=(event)=>{
        setEntertedTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     entertedTitle:event.target.value,
        // })
   }
   const amountchangehandler=event=>{
        setEntertedAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     entertedAmount:event.target.value,
        // })
   }
   const datechangehandler=event=>{
        setEntertedDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     entertedDate:event.target.value,
        // })
   }
   const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:entertedTitle,
            amount:entertedAmount,
            date:new Date(entertedDate),
        }
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        //after form submission all input need to be cleared
        setEntertedTitle('');
        setEntertedAmount('');
        setEntertedDate('');
   }
   return (
    <form onSubmit={submitHandler}>
        <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Title</label>
                <input type="text" value={entertedTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense_control">
                <label>Amount</label>
                <input type="number" value={entertedAmount} min="0.01" step="0.01" onChange={amountchangehandler}/>
            </div>
            <div className="new-expense_control">
                <label>Date</label>
                <input type="date" value={entertedDate} min="2019-01-01" max="2022-12-31" onChange={datechangehandler}/>
            </div>
        </div>
        <div className="new-expense_actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm