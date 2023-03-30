import ExpenseItems from "./components/ExpenseItems";
function App() {

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
      <header className="App-header">
       <ExpenseItems title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
       <ExpenseItems title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
       <ExpenseItems title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
       <ExpenseItems title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
      </header>
    </div>
  );
}

export default App;
