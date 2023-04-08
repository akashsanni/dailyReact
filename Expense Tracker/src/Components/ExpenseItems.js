import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css"
import { useState } from "react";

function ExpenseItems( {date,title,amount} ){
    let [state,setState] = useState(title)
    let clickHandler = () => {
        setState('updated')
    }
    return(
        <div className="expense-items">
            <div className="expense-items-date-wrapper">
                <ExpenseDate date={date}/>
                <div className="expense-items__title"><h1>{state}</h1></div>
            </div>
            <div className="expense-items__amount">{amount}</div>
            
            <button className="btn" onClick={clickHandler}>Click Here </button>
            
        </div>
    )
}

export default ExpenseItems;