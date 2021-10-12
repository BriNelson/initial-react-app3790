import ExpenseItem from './components/ExpenseItem'
import * as React from 'react';



function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      
      
    </div>
  );
}


export default App;
