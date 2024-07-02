import React from 'react'
import Parent from './Parent'


const Grandparent = () => {
    const message = "Hi, This is Grand Parent"
  return (
    <div className='grand-box'>
        <h2>This is Grand Parent Box</h2>
        <Parent message={message} />
    </div>
  )
}

export default Grandparent