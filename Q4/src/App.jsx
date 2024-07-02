import { useState } from 'react'
import './App.css'
import Lists from './Lists'

function App() {
  const items=['List Item1', 'List Item2', 'List Item3']

  return (
    <>
      <h1>Lists Components</h1>
      <Lists items={items} />
    </>
  )
}

export default App
