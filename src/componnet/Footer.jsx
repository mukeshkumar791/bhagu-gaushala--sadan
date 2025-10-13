import React from "react";
import "./Footer.css";
import qrcode from "../img/QrCODEUntitled-pica.png"
import { NavLink } from "react-router-dom";
import logo from'../img/mukeshjakhar,.png'
export default function Footer() {
  return (
    <>
    {/* <div className="container"> }
    {<div className="text-center donate-fix">
  <a href="upi://pay?pa=shrib62809080@barodampay&pn=Shri+Banke+Bihari+Gaushala&cu=INR" target="_blank"
          className="donate-btn"
        >
          <h5>donate now</h5>
        </a>
</div> }
{ </div> */}
    <div className="footer-backgroud">
     
        <div >
  <p className="slogan">🙏 गौ माता की सेवा ही सच्ची सेवा है 🙏</p>
</div>
<div className="line"></div>
 <div className="container">
<div  className="footer-main">

<div className="footer-frist" >
  <img className="footer-logo" src={logo} alt="logo gau shala" />
  <div  className="footer-info">
  <h6>Name = Shri Banke Bihari gau sewa sadan bhagu</h6>
  <p>contectNumber=6280909078</p>
  <p>whatsappNo= 6280909078</p>
  
  </div>

     <div className="sign" style={{ fontSize: "32px", fontWeight: "bold" , paddingBottom:"15px"}} >
      <span className="fast-flicker">f</span>oll<span className="flicker">o</span>w <span className="flicker">us</span> <span className="fast-flicker">on</span>
    </div>
 
  <div className="d-flex gap-5 justify-content-center">
    <div className="broder-fs">
     <a 
    href="https://chat.whatsapp.com/JkIis0RwEmS8IzMyh4M0tj" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-whatsapp"></i></a></div>
   <div className="broder-fs">  <a 
    href="https://www.instagram.com/gaushala_bhagu?igsh=MTF4cjVmbXE4ZGVrcA==" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-instagram"></i>
  </a></div>
   <div className="broder-fs">  <a 
    href="https://www.youtube.com/@mukeshjakhar27"  target="_blank"  rel="noopener noreferrer">
    <i class="fa-brands fa-youtube"></i></a></div>
     <div className="broder-fs">  <a 
    href="https://www.facebook.com/share/17RZ7LUUje/"  target="_blank"  rel="noopener noreferrer">
  <i class="fa-brands fa-facebook-f"></i>  </a></div>
   {/* <div className="broder-fs"><a className="fa-brands fa-instagram"></a></div> */}
  </div>
  </div>


<div>
  <h3 className="text-center bank "> Quick Links </h3>
  <ul className="footer-ul">
    
    <li> <NavLink className="footer-navlinks" to="/"> Home </NavLink></li>
    <li> <NavLink className="footer-navlinks" to="/about">  About    </NavLink></li>
    <li> <NavLink className="footer-navlinks" to="/facilities">  Contact  </NavLink> </li>
    <li> <NavLink className="footer-navlinks" to="/help"> Facilities</NavLink> </li>
  </ul>



</div>

<div  >
<div>
  <h3 className="bank">Bank details</h3>
  <div  className="footer-ul">
    <p>
    Name = Shri Banke Bihari gau sewa sadan </p>
    <p>A/C No = 57020200000080</p>
    <p>IFSC Code -BARB0BHAFAZ</p>
    <p>Bank Name = Bank of borada</p>
    <p> Branch Name = bhagu</p>
    <img className="qr" src={qrcode} alt="" />
  </div>
</div>
</div>
</div>
</div>
<div className="line"></div>

  <div className="slogan-bottam">
        © 2025 Shri Banke Bihari Gau Sewa Sadan Bhagu — All Rights Reserved
      </div>
    </div>
    </>
  );
}
