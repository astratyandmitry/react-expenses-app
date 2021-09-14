import React from 'react'
import { ChartDataset } from '../../types'
import ChartBar from './ChartBar'
import _ from 'lodash'

interface ChartProps {
  datasets: ChartDataset[]
}

function Chart ({ datasets }: ChartProps) {
  const chartMaxValue = _.max(datasets.map((dataset: ChartDataset): number => dataset.value))

  if (!chartMaxValue) {
    return <></>
  }

  return (
    <div className="flex justify-around bg-gray-200 shadow-inner p-4 mb-8 rounded-md">
      {datasets.map((dataset: ChartDataset) => (
        <ChartBar key={dataset.label} dataset={dataset} maxValue={chartMaxValue}/>
      ))}
    </div>
  )
}

export default Chart
