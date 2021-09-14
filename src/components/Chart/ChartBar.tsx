import React from 'react'
import { ChartDataset } from '../../types'
import _ from 'lodash'

interface ChartBarProps {
  dataset: ChartDataset;
  maxValue: number;
}

function ChartBar ({ dataset, maxValue }: ChartBarProps) {
  const barHeight = _.round((dataset.value / maxValue) * 100) + '%'

  return (
    <div className="text-center">
      <div className="h-24 w-full bg-gray-300 rounded relative">
        <div className="absolute inset-x-0 bottom-0 bg-blue-500 rounded animated duration-200" style={{ 'height': barHeight }}></div>
      </div>
      <div className="text-sm font-medium text-gray-500">
        {dataset.label}
      </div>
    </div>
  )
}

export default ChartBar
