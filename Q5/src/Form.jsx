import React, { useState } from 'react'

const Form = () => {
    const [email, setEmail]= useState('')
    const [name, setName]= useState('')
    const [submitData, setsubmitData] =useState(null)
    const formSubmit=(e)=>{
        e.preventDefault();
        setsubmitData({name, email})

        // setForm({...form, [e.target.name]:e.target.value})
        // console.log(form)
    }
    
  return (
    <div className='total-box'>
    <form onSubmit={formSubmit}>
        
            <h3>Forms and Controlled Components</h3>
            <div className='form-group'>
                <label>Name</label>
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name} />
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
            </div>
            <div className='form-btn'>
                <button type="submit">Submit</button>
            </div>
        
    </form>
    {
        submitData &&(
            <div className='submit-data'>
                <p><h4>Name:</h4>{submitData.name}
                <h4>Email:</h4> {submitData.email}</p>
            </div>
        )
    }
</div>   
    
  );
}

export default Form