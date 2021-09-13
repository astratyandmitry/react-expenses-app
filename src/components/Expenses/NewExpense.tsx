import React, { useState } from 'react'

import FormInput from '../UI/Form/FormInput'
import { Expense } from '../../types'
import _ from 'lodash'

interface NexExpenseProps {
  onExpenseAdded (expense: Expense): void;
}

function NewExpense ({ onExpenseAdded }: NexExpenseProps) {
  const [formVisible, setFormVisible] = useState(true)
  const handleFormVisibleToggle = () => {
    setFormVisible(prevState => !prevState)
  }

  const [expense, setExpense] = useState({
    title: '',
    store: '',
    amount: '',
    date: '',
  })

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onExpenseAdded({
      id: `exp-${_.random().toString()}`,
      title: _.trim(expense.title),
      store: _.trim(expense.title),
      amount: _.round(parseInt(expense.amount), 2),
      date: new Date(expense.date),
    })

    setExpense({
      title: '',
      store: '',
      amount: '',
      date: 'new Date()',
    })
  }

  const handleInputUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpense((prevState => {
      return { ...prevState, [e.target.id]: e.target.value }
    }))
  }

  return (
    <div className="bg-white shadow-xl rounded-md p-8 mb-8">
      <div className="flex items-center justify-between space-x-4">
        <div className="text-xl text-gray-800 font-medium">
          Store new Expense
        </div>
        <button
          className="text-sm text-blue-500 bg-blue-50 px-3 py-1 rounded cursor-pointer hover:border-transparent"
          onClick={handleFormVisibleToggle}
        >
          {formVisible ? 'Hide form' : 'Show form'}
        </button>
      </div>

      {formVisible && (
        <form className="mt-4" onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              name="title"
              label="Title"
              placeholder="Description of Expense"
              value={expense.title}
              onInputChanged={handleInputUpdate}
            />

            <FormInput
              name="store"
              label="Store"
              placeholder="Place of purchase"
              value={expense.store}
              onInputChanged={handleInputUpdate}
            />

            <FormInput
              name="amount"
              label="Amount"
              placeholder="Amount of Purchase"
              value={expense.amount}
              onInputChanged={handleInputUpdate}
              type="number"
            />

            <FormInput
              name="date"
              label="Date"
              placeholder="Purchase Date"
              value={expense.date}
              onInputChanged={handleInputUpdate}
              type="date"
            />
          </div>

          <button type="submit"
                  className="bg-blue-600 text-white font-medium px-4 py-2 rounded inline-block mt-4 hover:bg-blue-700 focus:bg-blue-800">
            Save Expense
          </button>
        </form>
      )}
    </div>
  )
}

export default NewExpense
