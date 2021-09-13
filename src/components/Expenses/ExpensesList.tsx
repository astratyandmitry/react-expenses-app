import React, { useState } from 'react'
import { Expense } from '../../types'
import ExpenseItem from './ExpenseItem'
import ExpensesEmpty from './ExpensesEmpty'
import ExpensesFilter from './ExpensesFilter'
import _ from 'lodash'

interface ExpensesListProps {
  expenses: Expense[];
  useFilter: boolean;
}

function ExpensesList ({ expenses, useFilter = false }: ExpensesListProps) {
  const filterCurrentYear = new Date().getFullYear().toString()
  const filterMinYear = _.min(expenses.map((expense: Expense) => expense.date.getFullYear().toString()))
  const filterYearsRange = _.range(parseInt(filterCurrentYear), parseInt(filterMinYear || filterCurrentYear) - 1, -1)

  const [filterSelectedYear, setFilterSelectedYear] = useState(new Date().getFullYear().toString())

  const filteredExpenses = expenses.filter((expense: Expense) => {
    return !useFilter || expense.date.getFullYear().toString() === filterSelectedYear
  })

  return (
    <div className="bg-white shadow-xl rounded-md p-4">
      {useFilter && <ExpensesFilter
        yearsRange={filterYearsRange}
        selectedYear={filterSelectedYear}
        onYearChanged={setFilterSelectedYear}
      />}

      {filteredExpenses.length === 0 && <ExpensesEmpty/>}

      {filteredExpenses.length > 0 && (
        <div className="divide-y">
          {filteredExpenses.map((expanse: Expense) => (
            <ExpenseItem key={expanse.id} expense={expanse}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExpensesList
