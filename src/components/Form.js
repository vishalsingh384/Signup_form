import React, { useEffect, useState } from 'react'
import ErrorMsg from './ErrorMsg';

const Form = () => {

  const [firstname,setFirstName]=useState('');
  const [lastname,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const [firstnameError,setFirstNameError]=useState('');
  const [lastnameError,setLastNameError]=useState('');
  const [emailError,setEmailError]=useState('');
  const [passwordError,setPasswordError]=useState('');

  const [emailPlaceHolder,setEmailPlaceHolder]=useState('Email');
  const [emailClassName, setEmailClassName]=useState(null);
  

  const emailChecker=(email)=>{
    console.log("called");
    if(email==='') return true;
    if(email.toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)===null){
      return false; //not matched
    }
    return true;//matched
  }

  const handleSubmit=async (e)=>{
    let count=0;
    if(firstname==='') {
      setFirstNameError('First Name cannot be empty');
      count++;
    }
    if(lastname==='') {
      setLastNameError('Last Name cannot be empty');
      count++;
    }
    if(email==='') {
      setEmailError('Email cannot be empty');
      setEmailPlaceHolder('');
      setEmailClassName('customInput');
      count++;
    }
    else if(!emailChecker(email)){
      setEmailError('Looks like this is not an email');
      setEmail('');
      setEmailPlaceHolder('email@example.com');
      setEmailClassName('customInput1')
      count++;
    }
    if(password==='') {
      setPasswordError('Password cannot be empty');
      count++;
    }
    if(count>0) e.preventDefault();
  }

  const handleInput=(e)=>{
    if(e.target.name==='firstname'){
      setFirstNameError('');
      setFirstName(e.target.value);
    }
    if(e.target.name==='lastname'){
      setLastNameError('');
      setLastName(e.target.value);
    } 
    if(e.target.name==='email') {
      setEmailError('');
      setEmailClassName(null);
      setEmailPlaceHolder('Email');
      setEmail(e.target.value);
    }
    if(e.target.name==='password') {
      setPasswordError('');
      setPassword(e.target.value);
    }
  }

  return (
    <form className='form-container'>
        <input className={firstnameError===''?null:'customInput'} style={{marginTop:'0'}} type="text" placeholder={firstnameError===''?'First Name':''} name='firstname' onChange={(e)=>handleInput(e)} value={firstname}/>
        {firstnameError&&<ErrorMsg props={firstnameError}/>}
        <input className={lastnameError===''?null:'customInput'} type="text" placeholder={lastnameError===''?'Last Name':''} name='lastname' onChange={(e)=>handleInput(e)} value={lastname}/>
        {lastnameError&&<ErrorMsg props={lastnameError}/>}
        <input className={emailClassName} type="email" placeholder={emailPlaceHolder} name='email' onChange={(e)=>handleInput(e)} value={email}/>
        {emailError&&<ErrorMsg props={emailError}/>}
        <input className={passwordError===''?null:'customInput'} type="password" placeholder={passwordError===''?'Password':''} name='password' onChange={(e)=>handleInput(e)} value={password}/>
        {passwordError&&<ErrorMsg props={passwordError}/>}
        <button onClick={(e)=>handleSubmit(e)}>Claim your free trial</button>
        <p style={{fontSize:'0.7em',color:'gray',textAlign:'center'}}>By creating an account you agree to our <a href="#" style={{color:'red',textDecoration:'none'}}>Terms & Privacy</a>.</p>
    </form>
  )
}

export default Form;