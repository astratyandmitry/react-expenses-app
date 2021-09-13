import React from 'react'
import { Expense } from '../../types'
import ExpenseItemDate from './ExpenseItemDate'
import _ from 'lodash'

interface ExpenseItemProps {
  expense: Expense;
}

function ExpenseItem ({ expense }: ExpenseItemProps) {
  return (
    <div className="flex p-6 items-center">
      <ExpenseItemDate expense={expense}/>

      <div className="ml-8 flex flex-grow items-center justify-between">
        <div>
          <div className="text-xl font-medium">
            {expense.title}
          </div>

          {expense.store && (
            <div className="text-sm text-gray-500 leading-snug">at {expense.store}</div>
          )}
        </div>

        <div className="text-red-600">
          -${expense.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem
