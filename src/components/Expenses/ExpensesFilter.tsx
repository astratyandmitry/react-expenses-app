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
    <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
      <div className="text-sm text-gray-700">
        Filter Expenses By Year
      </div>

      <select
        className="text-sm bg-white border p-1 rounded"
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
