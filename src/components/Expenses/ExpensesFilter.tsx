import React from 'react'

interface ExpensesFilterProps {
  yearsRange: number[];
  selectedYear: string;

  onYearChanged (year: string): void;
}

function ExpensesFilter ({ yearsRange, selectedYear, onYearChanged }: ExpensesFilterProps) {
  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onYearChanged(event.target.value)
  }

  return (
    <div className="flex justify-between items-center bg-gray-500 px-6 py-3 rounded mb-4">
      <div className="text-sm text-gray-100">
        Filter Expenses By Year
      </div>

      <select
        className="text-sm bg-white py-1 px-2 rounded"
        value={selectedYear}
        onChange={handleYearChange}
      >
        {yearsRange.map((year: number) => (
          <option key={year.toString()}>{year.toString()}</option>
        ))}
      </select>
    </div>
  )
}

export default ExpensesFilter
