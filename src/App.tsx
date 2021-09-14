import React from 'react'

import './index.css'
import Hero from './components/UI/Hero'
import Expenses from './components/Expenses/Expenses'

function App () {
  return (
    <div className="min-h-screen min-w-screen bg-gray-50">
      <div className="container py-16 px-4 mx-auto">
        <Hero/>

        <Expenses/>
      </div>
    </div>
  )
}

export default App
