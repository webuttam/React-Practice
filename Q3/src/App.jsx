import { useState } from 'react'
import './App.css'
import Conditionalrender from './Conditionalrender'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const toggleLogin =() =>{
    setLoggedIn(!isLoggedIn);
  }

  return (
    <>
      <h1>Conditional Rendering</h1>
      <Conditionalrender isLoggedIn={isLoggedIn} />
      <button onClick={toggleLogin} className={isLoggedIn ? 'logout-btn' : 'login-btn'}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </>
  )
}

export default App
