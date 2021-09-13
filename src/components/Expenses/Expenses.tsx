import React, { useState } from 'react'
import NewExpense from './NewExpense'
import ExpensesList from './ExpensesList'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2019, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    store: 'NOMAD Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    store: 'IKEA Sweden',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

function Expenses () {
  const [expenses] = useState(DUMMY_EXPENSES)

  return (
    <div>
      <NewExpense/>

      <ExpensesList expenses={expenses} useFilter={true}/>
    </div>
  )
}

export default Expenses
