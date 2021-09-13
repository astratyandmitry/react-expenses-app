import React from 'react'
import { Expense } from '../../types'

interface ExpenseItemDateProps {
  expense: Expense;
}

function ExpenseItemDate ({ expense }: ExpenseItemDateProps) {
  const month = expense.date.toLocaleString('en-US', { month: 'short' })
  const day = expense.date.toLocaleString('en-US', { day: '2-digit' })
  const year = expense.date.toLocaleString('en-US', { year: 'numeric' })

  return (
    <div className="w-32 text-center bg-blue-50 p-4 rounded">
      <div className="text-blue-600 font-medium leading-none">
        {year}
      </div>
      <div className="text-sm leading-snug text-blue-500">
        {day} {month}
      </div>
    </div>
  )
}

export default ExpenseItemDate
