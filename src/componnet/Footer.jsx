import React from 'react'
import "./Footer.css"
import Qrcode from "../img/QR-Code100.jpg"
const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='footer-color-back'>
          <div className='container'>
   <div className='footer-main'>
    <div>
      <img src="" alt="logo" />
      <h3>श्री बांके बिहारी गौ सेवा सदन</h3>
      <div>
        <h5>contect us </h5>
   <p>24x7 Helpline Number (Cow) Ambulance bhagu sadan</p>
   <p>number=xxxxx</p>
   <p>Ambulance, bhagu Branch</p>
      </div>
      <div className='gap-5 d-flex'>
        <i href="https://pay.google.com/gp/p/ui/pay?pa=yourupiid@okaxis&pn=YourName&am=100&cu=INR" target="_blank" class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-whatsapp"></i>
          <a class="pay-btn"
       href="https://pay.google.com/gp/p/ui/pay?pa=yourupiid@okaxis&pn=YourName&am=10&cu=INR&tn=Test%20Payment"
       target="_blank">
       
    </a>
      </div>
    </div>

    <div>
      <ul className='nav-laist'>
        <h2>Quick Links</h2>
        <li> <a  className='li-list' href="">Home</a></li>
        <li> <a className='li-list' href=""> about</a></li>
        <li> <a className='li-list' href="">gallery</a> </li>
        <li> <a className='li-list' href=""> content</a> </li> 
        <li> <a className='li-list' href=""> help</a> </li>
      </ul>
    </div>
    <div className='bank'>
   
   <div>
    <h2>Bank Details </h2>
    <p>Name= shri bankey bihri gau shala bhagu <br />
    A/C No. - 57000010xx <br />
    IFSC Code - xxxxxxx <br />
    Branch Name- Bhagu <br />
    Bank Name - Bank  of baroda
    </p>
    <img className='Qr' src={ Qrcode} alt="" />
    
   </div>
    </div>
   </div>
   </div>
   </div>
      </div>
    </div>
  )
}

export default Footer
