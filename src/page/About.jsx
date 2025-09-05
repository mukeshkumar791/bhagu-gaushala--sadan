import React from "react";
import "./About.css";
import Footer from "../componnet/Footer";
import cowhandicapta from '../jakhmi-anmals/Untitled.jpeg'
import camel from '../jakhmi-anmals/Camels.jpg'
import bulljhakmai from '../jakhmi-anmals/bullntitled.jpeg3'
import bulljpg23 from '../jakhmi-anmals/bull.jpg32'
import littelbabes from "../img/littelbabes.jpg"
import naguricow from "../img/12nagaur-cowshed-g6jjtoim2m.jpg"
import monkey from "../img/old-monkey-damaged-face-looking-260nw-1274329018.jpeg"
import injurifootcow from "../img/pathmeda-india-30-october-2014-260nw-665532004.jpeg"
// import flowers from"../img/1.png"
export default function About() {
   
  return (
    <>
    <section className="section">
     <div className="about-page">
      <div className="about-hero">
        <h1 className="font"> श्री बांके बिहारी गौ सेवा सदन - भागू </h1>
        <p> "गौ माता की सेवा ही सबसे बड़ा धर्म है" </p>
      </div>

      <div className="about-section">
        <h2>हमारी कहानी</h2>
        <p>
          श्री बांके बिहारी गौ सेवा सदन की शुरुआत बेसहारा, घायल और बीमार
          गौमाता की सेवा करने के उद्देश्य से हुई। यह स्थान उन गायों का घर है
          जिन्हें सड़कों पर बेसहारा छोड़ दिया जाता है।
        </p>
      </div>

      <div className="about-section">
        <h2> हमारा मिशन</h2>
        <p>
          हमारा मिशन है प्रत्येक गाय को सुरक्षित आश्रय, पौष्टिक भोजन और
          चिकित्सा सुविधा उपलब्ध कराना।
        </p>
      </div>

      <div className="about-section">
        <h2>हमारा विजन</h2>
        <p>
          हम ऐसी गौशाला बनाना चाहते हैं जहाँ कोई भी गाय भूखी या घायल ना रहे और
          सभी को स्नेह व सम्मान मिले।
        </p>
      </div>

      <div className="about-section">
        <h2> हमारे मूल्य</h2>
        <ul>
          <li>करुणा और सेवा भाव</li>
          <li>मानवता और संस्कृति की रक्षा</li>
          <li>प्रकृति और पर्यावरण का संतुलन</li>
        </ul>
      </div>

      <div className="about-section">
        <h2> गौ माता की दैनिक सेवा</h2>
        <p>
          हर दिन गायों के लिए भोजन, पानी और चिकित्सकीय देखभाल की जाती है। हम
          गायों को परिवार की तरह मानते हैं।
        </p>
      </div>

      <div className="about-section">
        <h2> हमारी उपलब्धियाँ</h2>
        <p>
          अब तक सैकड़ों घायल गायों का इलाज, बेसहारा गायों को आश्रय और
          दानकर्ताओं की मदद से गौशाला का विस्तार किया गया है।
        </p>
      </div>

      <div className="about-section">
        <h2> आप कैसे मदद कर सकते हैं?</h2>
        <ul>
          <li>दान द्वारा सहयोग करें</li>
          <li>चारा / दाना प्रदान करें</li>
          <li>स्वयंसेवा (Volunteering) करें</li>
          <li>गौशाला के संदेश को फैलाएँ</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>🙏 प्रेरणा</h2>
        <p>
          भगवान श्री कृष्ण की तरह, हम भी गायों की सेवा करके जीवन को सार्थक
          बनाना चाहते हैं। गौ सेवा ही परम धर्म है।
        </p>
      </div>

      <div className="about-section about-cta">
        <h2> संपर्क करें</h2>
        <p>
           गाँव भागू, जिला अबोहर, पंजाब - 152116 <br />
         <p>  contact=62836-30247</p>
  <p> Email= <br />
          shribankebihari <br />gosevasadanbhag@gmail.com
          </p>
         < p><strong>UPI ID:</strong> shrib62809080@barodampay</p>
        </p>
         <button>🙏 अभी दान करें</button> 
      </div>
      </div>
    </section>

<section className="sect-about">
  <div className="container">  
    <h1 className="font text-center">
घायल जानवरों का इलाज
    </h1>
    <div className="treatment-img">
          <div className="pic-demage"> 
  <img className="slider-pic" src={cowhandicapta} alt="" />
  <h2>डाउनर  गाय  का इलाज </h2>
</div>
<div className="pic-demage"> 
  <img className="slider-pic" src={littelbabes} alt="" />
  <h2>बछड़ा  </h2>
</div>
      
<div className="pic-demage"> 
  <img className="slider-pic" src={bulljpg23} alt="" />
  <h2>बैल का इलाज </h2>
        </div>
<div className="pic-demage"> 
  <img className="slider-pic" src={camel} alt="" />
  <h2>ऊंट  का इलाज </h2>
        </div>
<div className="pic-demage"> 
  <img className="slider-pic" src={bulljhakmai} alt="" />
  <h2>बैल का इलाज  </h2>
        </div>

<div className="pic-demage"> 
  <img className="slider-pic" src={naguricow } alt="" />
  <h2>भोजनयाल कक्ष  </h2>
        </div>
<div className="pic-demage"> 
  <img className="slider-pic" src={monkey } alt="" />
  <h2>वानर का इलाज  </h2>
        </div>
<div className="pic-demage"> 
  <img className="slider-pic" src={injurifootcow } alt="" />
  <h2>गाय के पैर की दरार </h2>
        </div>
        </div>
    <div className="treatment-img">

</div>



    </div>
</section>




    <Footer/>
</>
  );
}

