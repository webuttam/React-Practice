import React, { useState } from 'react'
import './Form.css'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [submitData, setsubmitData] = useState(null)
    const formSubmit=(e) =>{
        e.preventDefault();
        setsubmitData({name, email});
    }

  return (
    <div className='form-box'>
        <h1>Forms and Controlled Components</h1>
        <form onSubmit={formSubmit}>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' name="name" onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type="email" name='email' onChange={(e) =>setEmail(e.target.value)} value={email} />
            </div>
            <div className='form-btn'><button>Submit</button></div>
        </form>
        {submitData&&(
            <div className='form-value'>
                <p>Name: {submitData.name}</p>
                <p>Email: {submitData.email}</p>
            </div>
        )}
    </div>
  )
}

export default Form