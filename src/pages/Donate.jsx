import React from 'react'
import './donate.css'
import sun from '../sun-shining-sky-sunrise-sunset-time-background_58717-205.avif'
const Donate = () => {
  return (
    <>  
    <div> 
    <div className='donate-back-img'> 
        <div className='contanier'>
      <div className='donate'>
     
     <div className='account-type'>
        <h5>Account</h5>
        <input className='input-text' type="text" placeholder='Amount' />
     </div>
         <div className='account-type'>
        <h5>Name</h5>
        <input className='input-text' type="text" placeholder='Enter your  ' />
     </div>
         <div className='account-type'>
        <h5>PAN No.</h5>
        <input className='input-text' type="text" placeholder='MANDATORY FOR 80G' />
     </div>
         <div className='account-type'>
        <h5>Mobile Number </h5>
        <input className='input-text' type="text" placeholder="Enter Mobile Number" />
     </div>
         <div className='account-type'>
        <h5>Email </h5>
        <input className='input-text' type="text" placeholder="Enter your email" />
     </div>
      </div>
      <div>
 <button className='bt'>pay now</button></div>
    </div>
    </div>
     </div> 
     skn21264@gmail.com
    </>

  )
}

export default Donate
