import React from 'react'
import './Greetings.css'

const Greetings = ({message}) => {
  return (
    <div className='basic-box'><h1>{message}</h1></div>
  )
}

export default Greetings