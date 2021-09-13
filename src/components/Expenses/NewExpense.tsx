import React, { useState } from 'react'

import '../../assets/angle-down.svg'
import FormInput from '../UI/Form/FormInput'

interface NexExpenseProps {

}

function NewExpense (props: NexExpenseProps) {
  const [formVisible, setFormVisible] = useState(true)

  const handleFormVisibleToggle = () => {
    setFormVisible(prevState => !prevState)
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
            />

            <FormInput
              name="store"
              label="Store"
              placeholder="Place of purchase"
            />

            <FormInput
              name="amount"
              label="Amount"
              placeholder="Amount of Purchase"
              type="number"
            />

            <FormInput
              name="date"
              label="Date"
              placeholder="Purchase Date"
              type="date"
            />
          </div>

          <button type="submit" className="bg-blue-600 text-white font-medium px-4 py-2 rounded inline-block mt-4 hover:bg-blue-700 focus:bg-blue-800">
            Save Expense
          </button>
        </form>
      )}
    </div>
  )
}

export default NewExpense
