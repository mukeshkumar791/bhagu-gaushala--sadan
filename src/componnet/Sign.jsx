import React from 'react'
import './Login.css'
const Sign = () => {
  return (
    <div>
        <h2 className='details'>Enter your details </h2>
          <form className='Loginfrom'>
        <input checked type="text" placeholder="username" />
        <input    type="text" placeholder='enter your email' />
        <input   type= "password" placeholder='enter your password'/>
        <button className='submit-btn' type='submit' >sign  in</button>
      </form>
    </div>
  )
}

export default Sign
