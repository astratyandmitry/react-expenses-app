import React from 'react'
import { Expense } from '../../types'
import ExpenseItemDate from './ExpenseItemDate'

interface ExpenseItemProps {
  expense: Expense;
}

function ExpenseItem ({ expense }: ExpenseItemProps) {
  return (
    <div className="flex p-4 items-center">
      <ExpenseItemDate expense={expense}/>

      <div className="ml-8 flex flex-grow items-center justify-between">
        <div>
          <div className="text-xl font-medium">
            {expense.title}
          </div>

          {expense.store && (
            <div className="text-sm text-gray-600 leading-snug">at {expense.store}</div>
          )}
        </div>

        <div className="text-red-600 font-medium">
          -${expense.amount}
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem
