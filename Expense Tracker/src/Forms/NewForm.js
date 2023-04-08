import React,{useState} from "react";
import "./NewForm.css"
function NewForm(props){

    let [etitle,esetTitle] = useState('');
    let [eamount,esetAmount] = useState('');
    let [edate,esetDate] = useState('');
    

    const titleHandler = (e)=>{
        esetTitle(e.target.value);
    }
    const amountHandler = (e)=>{
        esetAmount(e.target.value);
    }
    const dateHandler = (e)=>{
        esetDate(e.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();

        const expenseData = {
            title: etitle,
            amount: eamount,
            date: new Date(edate),
        }  
        // console.log("Inside submit form Handler --> ",expenseData)
        props.newFormSubmission(expenseData);
        esetTitle('');
        esetAmount('');
        esetDate('');
    }

    return(
        <div className="form">

            <form className="form-wrapper" onSubmit={submitForm}>

                <div className="title-amount">

                    <label >Title</label>

                    <input type="text" name="title" 
                        className="form-input-box title" 
                        value={etitle}
                        onChange={titleHandler}
                    />

                    <label >Amount</label>

                    <input type="number" name="amount" 
                        className="form-input-box amount" 
                        min={1} value={eamount} 
                        onChange={amountHandler}
                    />
                </div>
                <div className="date-wrapper">
                    <label >Date </label>
                    <input type="date" name="date" 
                        className="form-input-box date" 
                        min={2-4-2023}
                        max={4-4-2023}
                        value={edate} 
                        onChange={dateHandler}
                    />
                </div>

                <button className="add-expense-btn">Add Expense</button>
            </form>  

        </div>
    )
}

export default NewForm;