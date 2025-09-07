import React from 'react';
import './donate.css'
import Footer from '../componnet/Footer';
import QRcode from "../img/QrCODEUntitled-pica.png"
import gogglapay from "../img/google-pay.png"
import phonepay from "../img/phonepay.png"
import paytmpay from "../img/paytm33images.png"
import upipay from "../img/upipay.jpeg"

const Donation = () => {
  return (
    <>
    <div className="gau-donation-page">

      <div className="gau-banner">
        <h1>श्री बाके बिहारी गौ सेवा सदन</h1>
        <p>आपका छोटा सा योगदान भी कई गौमाताओं का जीवन बचा सकता है</p>
      </div>

      <section className="donation-amounts">
        <a href="upi://pay?pa=shrib62809080@barodampay=Shri+Banke+Bihari+Gaushala&am=500&cu=INR" target="_blank">
    <button class="donate-btn">Donate Now with UPI</button>
  </a>
        <h2 className='pt-5'>आपका हर एक दान गौ माता की सेवा में उपयोग होगा</h2>

        <div className="math-upi">
          <div>
          <img className='goggla-pay' src={gogglapay} alt="" /></div>
        
         <div className='goggla-pay-border'>
            <img className='pay' src={phonepay} alt="" />
            </div>
            <div className='goggla-pay-border'>
            <img className='goggla-pay' src={upipay} alt="" />
            </div>
            <div className='goggla-pay-border'>
            <img className='pay' src={paytmpay} alt="" />
            </div>
        </div>
      </section>

      <section className="upi-section">
        <h2>UPI के माध्यम से दान करें</h2>
        <img  src={QRcode}  alt="UPI QR Code" className="qr-code" />
        <p><strong>UPI ID:</strong> shrib62809080@barodampay</p>
                <a href="upi://pay?pa=shrib62809080@barodampay=Shri+Banke+Bihari+Gaushala&am=500&cu=INR" target="_blank"

          className="donate-btn"
        >
          UPI से दान करें
        </a>
      </section>

      <section className="bank-details">
        <h2>बैंक विवरण</h2>
        <p><strong>Bank Name:</strong>Bank of baroda</p>
        <p><strong>Account Name:</strong> Shri Bake Bihari Gau Sewa Sadan</p>
        <p><strong>Account No:</strong> 57020200000080</p>
        <p><strong>IFSC Code:</strong> BARB0BHAFAZ</p>
      </section>


      <a 
  href="https://chat.whatsapp.com/JkIis0RwEmS8IzMyh4M0tj?mode=ac_t" 
  target="_blank" 
  rel="noreferrer"
  className="whatsapp-join-btn"
>
  📱 Join WhatsApp Group
</a>
    </div>
    <Footer/>
    </>
  );
};

export default Donation;

