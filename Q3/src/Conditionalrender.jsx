import React from 'react'
import './Common.css'

const Conditionalrender = ({isLoggedIn}) => {
  return (
    <div className='message-box'>
        {
            isLoggedIn ?(
                <p className='welcome-msg'>You are Login successfully..</p>
            ):(
                <p className='login-msg'>Please Login...</p>
            )
        }
    </div>
  )
}

export default Conditionalrender