import React, { useState } from 'react'
import NewExpense from './NewExpense'
import ExpensesList from './ExpensesList'
import { Expense } from '../../types'

const DUMMY_EXPENSES = [
  {
    id: 'exp-1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'exp-2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2019, 2, 12),
  },
  {
    id: 'exp-3',
    title: 'Car Insurance',
    store: 'NOMAD Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'exp-4',
    title: 'New Desk (Wooden)',
    store: 'IKEA Sweden',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

function Expenses () {
  const [expenses, setExpenses] = useState<Expense[]>(DUMMY_EXPENSES)

  const handleExpenseAdded = (expense: Expense) => {
    setExpenses(prevState => [expense, ...prevState])
  }

  return (
    <div>
      <NewExpense onExpenseAdded={handleExpenseAdded}/>

      <ExpensesList expenses={expenses} useFilter={true}/>
    </div>
  )
}

export default Expenses
