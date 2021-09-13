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
    <div className="w-32 text-center bg-yellow-50 p-2 rounded">
      <div className="text-yellow-500 font-medium">
        {month}, {day}
      </div>
      <div className="text-sm leading-snug text-yellow-400">
        {year}
      </div>
    </div>
  )
}

export default ExpenseItemDate
