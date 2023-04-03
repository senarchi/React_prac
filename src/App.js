import React from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const App=()=> {

  const expenses=[
    {
      id:1,
      title:'Car Insurance',
      amount:10000,
      date:new Date(2020,5,12)
    },
    {
      id:2,
      title:'Home Loan',
      amount:20000,
      date:new Date(2021,6,21)
    },
    {
      id:3,
      title:'Education',
      amount:3000,
      date:new Date(2022,2,20)
    },
    {
      id:4,
      title:'Household Goods',
      amount:5000,
      date:new Date(2023,6,2)
    }
  ]
  return (
    <div className="App">
      <NewExpense/>
       <Expenses items={expenses}/>
     
    </div>
  );
}

export default App;
