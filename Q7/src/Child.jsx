import React from 'react'

const Child = ({message}) => {
  return (
    <div className='child-box'>
        <h2>This is Child Componenet</h2>
        <p>{message}</p>
    </div>
  )
}

export default Child