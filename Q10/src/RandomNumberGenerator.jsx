import React, { useState } from 'react'

const RandomNumberGenerator = () => {
    const [count, setCount] = useState(0)
    const HandleClick=()=>{
        setCount(Math.floor(Math.random() * 100 + 1))
    }
  return (
    <div className='box'>
        <h3>You clicked and random value is: <span>{count}</span></h3>
        <button onClick={HandleClick}>Click Me!</button>
    </div>
  )
}

export default RandomNumberGenerator