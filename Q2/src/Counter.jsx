import {useState} from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <>
        <div className='box'>
            <p>Count is: <span>{count}</span></p>
            <button onClick={()=> {setCount(count + 1)}}>Increment Button</button>
            <button onClick={()=>{setCount(count - 1)}}>Decrement Count</button>
        </div>
    </>
  )
}

export default Counter