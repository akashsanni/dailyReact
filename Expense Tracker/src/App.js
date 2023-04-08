import ExpenseItem from './Components/ExpenseItem';
import NewForm from './Forms/NewForm';
import { Header } from './Components/Header';
import './App.css';

function App() {
  const expenses = [
    {
      id:1,
      date: new Date(2020,5,15),
      title:"TV",
      amount:"$35.5",
    },
    {
      id:2,
      date: new Date(2021,3,6),
      title:"Car Insurance",
      amount:"$25.5",
    },
    {
      id:3,
      date: new Date(2022,6,5),
      title:"Bike Insurance",
      amount:"$15.5",
    },
  ];

    const newFormFunction = (expenseDataEdited) =>{
      console.log("inside app.js --->",expenseDataEdited)
    }

  return (
    <div className="App">
          <Header />
          <NewForm newFormSubmission={newFormFunction}/>
          <ExpenseItem items={expenses}/>
    </div>
  );
}

export default App;
