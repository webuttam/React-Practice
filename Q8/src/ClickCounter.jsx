import { useState, React } from 'react'
import './ClickCounter.css'

const ClickCounter = () => {
    const [count, setCount] = useState(0)
    const HandlingClick=()=>{
        setCount (count + 1)
    }
        
  return (
    <div className='counter-box'>
        <button onClick={HandlingClick}>Click Me!</button>
        <h3>Button Click Count Value is <span>{count}</span></h3>
    </div>
  )
}

export default ClickCounter