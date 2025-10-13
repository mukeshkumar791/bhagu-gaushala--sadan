import React from 'react'
import './Login.css'
import Logo from "../img/mukeshjakhar,.png"
const login = () => {
  return (
    <div>
     < div className='text-logo'>
     <img  className='heading-logo' src={Logo} alt="" />
     <h5 className='heading'>
      welcome bhagu gaushala-sewa sadan
     </h5>
  
     </div>

      <form className='Loginfrom'>
        <input checked type="text" placeholder="username" />
       
        <input    type="text" placeholder='enter your email' />
        <input    type='text' placeholder='enter your phone number'/>
        <input    type='text' placeholder='enter your address' /> 
        <input   type= "password" placeholder='enter your password'/>
        <input  type= "password" placeholder='confirm your password'/>
        <button className='submit-btn' type='submit' >submit</button>
      </form>
    </div>
  )
}
               
export default login
