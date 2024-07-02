import React from 'react'
import './App.css'
import Greeting from './Greeting'

function App() {

  return (
    <>
      <Greeting name="Uttam" />
      <Greeting name={32} />
    </>
  )
}

export default App
