import React from 'react'
import './Greetings.css'

const Card = ({name, email, phone}) => {
  return (
    <div className='card-box'>
        <h3><span>Name:</span> {name}</h3>
        <h3><span>Email:</span> {email}</h3>
        <h3><span>Phone:</span> {phone}</h3>
    </div>
  )
}

export default Card