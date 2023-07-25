import React from 'react'

const Form = () => {
  return (
    <form className='form-container'>
        <input type="text" placeholder='First Name' name='firstname'/>
        <input type="text" placeholder='Last Name' name='lastname'/>
        <input type="email" placeholder='Email Address' name='email'/>
        <input type="password" placeholder='Password' name='password'/>
        <button>Claim your free trial</button>
        <p style={{fontSize:'0.7em',color:'gray',textAlign:'center'}}>By creating an account you agree to our <a href="#" style={{color:'red',textDecoration:'none'}}>Terms & Privacy</a>.</p>
    </form>
  )
}

export default Form