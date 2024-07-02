import React from 'react'
import Child from './Child'

const Parent = ({message}) => {
  return (
    <div className='parrent-box'>
        <h2>This is Parent Componenet</h2>
        <Child message={message} />
    </div>
  )
}

export default Parent