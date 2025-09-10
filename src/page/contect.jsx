import React from "react";
import "./Contect.css";
import Footer from "../componnet/Footer";
export default function Contact() {
  return (
    <>
    <section className="contact-section">
      <h1>🐄 श्री बांके बिहारी गौ सेवा सदन - भागू 🐄</h1>
      <p className="slogan">🙏 "गौ माता की सेवा ही सबसे बड़ा धर्म है" 🙏</p>

      <div className="contact-container">
        <div className="contact-info">
          <h2>📞 संपर्क जानकारी</h2>
          <p>
            <strong>📍 पता:</strong> श्री बांके बिहारी गौ सेवा सदन, <br />
            गाँव भागू, तहसील अबोहर, पंजाब - 152116
          </p>
          <p>
            <strong>📞 मोबाइल:</strong>{""}
            <a href="tel:+916283630247">+91-6280909078</a>
          </p>
          <p>
            <strong>✉️ ईमेल:</strong>{" "}
            <a href="mailto:shribankebiharigosevasadanbhag@gmail.com">
              shribankebiharigosevasadanbhag <br />@gmail.com
            </a>
          </p>

          <h3>🌐 सोशल मीडिया</h3>
          <div className="social-links">
        
              <div className="d-flex gap-5">
    <div className="broder-fs">
     <a 
    href="https://chat.whatsapp.com/JkIis0RwEmS8IzMyh4M0tj" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-whatsapp"></i></a></div>
   <div className="broder-fs">  <a 
    href="https://www.instagram.com/jakhar3805" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-instagram"></i>
  </a></div>
   <div className="broder-fs">  <a 
    href="https://www.youtube.com/@mukeshjakhar27"  target="_blank"  rel="noopener noreferrer">
    <i class="fa-brands fa-youtube"></i></a></div>
  </div>
          </div>
        </div>

        <div className="contact-form">
          <h2> हमें संदेश भेजें</h2>
          <form>
            <label>आपका नाम:</label>
            <input type="text" placeholder="अपना नाम लिखें" required />

            <label>मोबाइल नंबर:</label>
            <input type="tel" placeholder="आपका मोबाइल नंबर" required />

            <label>ईमेल:</label>
            <input type="email" placeholder="आपका ईमेल" />

            <label>संदेश:</label>
            <textarea placeholder="अपना संदेश लिखें..." required></textarea>

            <button type="submit">🙏 संदेश भेजें</button>
          </form>
        </div>
      </div>
    </section>
    <section>
        <div style={{ width: "100%", height: "500px" }}>
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d863.5152933956904!2d74.2327095!3d30.0351028!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39170700521eccc7%3A0x7661c47428ee44a8!2z4KS24KWN4KSw4KWAIOCkrOCkvuCkguCkleClhyDgpKzgpL_gpLngpL7gpLDgpYAg4KSX4KWMIOCkuOClh-CkteCkviDgpLjgpKbgpKgg4KSt4KS-4KSX4KWC!5e0!3m2!1sen!2sin!4v1756795513395!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        // allowFullScreen=""
        // loading="lazy"
      ></iframe>
    </div>
    </section>
    <section>
    <Footer/></section>
    </>
  );
}
