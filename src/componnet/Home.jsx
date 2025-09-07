import React from 'react'
import './Home.css'
import tuladan from "../img/tt454662561-076.jpg"
import Footer from './Footer'
import cowpaap from "../img/save-the-cow.jpg"
import Carousel from 'react-bootstrap/Carousel';
import cowimage from "../img/banner-img-3.jpg"
import hiregrass from "../img/horse-grazing-field_1048944-19592654.avif"
import wlecom from "../img/colorful-welcome-design-template-free-vector-removebg-preview.png"
import mata from "../img/mataimages.jpeg"
const Header = () => {
  return (
    <div>
      <section>
        <section>
          <div className='container'>
            <div className='position-relative'>
            <div >
             <Carousel interval={1000} pause={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cowimage}
          alt="First slide"
          style={{ height: '600px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cowimage}
          alt="Second slide"
          style={{ height: '600px',objectFit: 'cover', }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hiregrass}
          alt="Third slide"
          style={{ height: '600px', objectFit: 'cover' }}
        />
        {/* <Carousel.Caption>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
          </div>
          
          <div className='welcome text-center '>
            <img src={wlecom} alt="" style={{width: '160px'}} />
         <p className='font2'>श्री बाके बिहारी गौ सेवा सदन </p>
          <div className='cow-tittel2'>
                    <h2 className='text-center'> Bhagu, rajawali road Abohar (tehsil)</h2>
                  </div>
          </div>
          </div>
          </div>
        </section>
      </section>
       <section className='section-padding'>  
        <div className='container'>
          <div className='d-flex gap-5 justify-content-center information'>
          <div className=''>
 <img className='realeant' src={mata} alt="" />
          </div>
 <div className='gaushale-make-informations items-center'>
          <h2 className='font'>श्री बाके बिहारी गौ सेवा सदन</h2>
          <p className='phara'> बाके बिहारी गौशाला एक ऐसा स्थान है जो गायों के प्रति प्रेम और देखभाल के लिए विशेष रूप से डिज़ाइन किया गया है। इसका निर्माण एक दूरदर्शी व्यक्ति की कृपा से हुआ है, जिनका उद्देश्य बेसहारा, घायल या दुर्घटनाग्रस्त गायों और मवेशियों को भोजन, आश्रय और चिकित्सा सहायता प्रदान करना है। सबसे बड़ा गौ उपचार अस्पताल खोल पाया है। गोपाष्टमी के पावन पर्व पर  देखरेख में गंगा गौ-संवर्धन केंद्र की स्थापना की गई है। इस पहल के मुख्य उद्देश्य के अनुसार, प्रत्येक गाँव को गौग्राम बनाना है।
 ने निम्नलिखित सेवाएँ प्रदान की हैं और अभी भी प्रदान कर रहा है:</p>
<p className='phara'>सीज़ेरियन ऑपरेशन</p>
<p className='phara'>रुनोटॉमी ऑपरेशन</p>
<p className='phara'>1000 से अधिक गायों को दवा दी गई।</p>
<p className='phara'>सूचना मिलते ही, गायों की सुरक्षा और बचाव के लिए एम्बुलेंस दौड़ पड़ती है।
बड़े ऑपरेशन चाहे कितना भी समय या पैसा क्यों न लगे, किए जाते हैं।</p>
         </div> 
        </div>
        </div>
      </section>
        <section className='section-padding'>   
        <div className='container'>
          <div className='d-flex  flex-column .align-items-center items1'>
          <div className='interdution-tittle'>
            <h2 className='text-center font'>श्री बांके बिहारी गौ सेवा सदन का परिचय</h2>
            <p className='phara'>श्री बांके बिहारी गौ सेवा सदन
              की स्थापना का मूल उद्देश्य यही है कि जो लावारिस गोवंश दुर्घटनाग्रस्त एवं अन्य बीमारी की पीड़ा से कराह रहा हो या मरणासन्न स्थिति से व्याकुल होकर सडकों के किनारे
              भटकता हो और भूख प्यास से व्याकुल होकर कहीं गहरे गढ्ढे में गिर गया हो या किसी वाहन की चपेट में आकर दुर्घटनाग्रस्त हो गया हो ऐसे गोवंशों को
              एम्बुलेंसों द्वारा समय पर लाकर उसका उपचार एवं इलाज कार्य करके बीमार गोवंश की सेवा करके एक नया जीवन देना ही (श्री बांके बिहारी सदन) का उद्देश्य हैं।</p>
          </div>
          </div>
          <div className='information-crads'>
            <div className='information-card-items'>
              <div className='text-center font'>
                <span class="fa fa-ambulance"></span>
              </div>
              <div className='px-3 text-center '>
                <h2  className='item-heading'>एम्बुलेंस सेवा</h2>
                <p >एम्बुलेन्स सेवा के लिए दूरभाष 6280909078 पर सूचना दें </p>
              </div>
            </div>
            <div className='information-card-items'>
              <div className='text-center font'>
                <span class="fa fa-podcast"></span>
              </div>
              <div className='px-3 text-center '>
                <h2  className='item-heading'>विशालकाय बांटा गोदाम</h2>
                <p>पीड़ाग्रस्त गोवंश के लिए पौष्टिक आहार जैसे खल, गुड़, चुरी, जौ, लापसी हेतु गेहुं का बाट बड़ी मात्रा में प्रतिदिन लगता है  </p>
              </div>
            </div>
            <div className='information-card-items'>
              <div className='text-center font'>
                <span className="fa fa-power-off"></span>
              </div>
              <div className='px-3 text-center '>
                <h2 className='item-heading'>गौमाता बिस्तर रूम</h2>
                <p>सर्दी के मौसम में सभी बीमार गोवंश व वन्यजीवों को गर्म कम्बलों की व्यवस्था</p>
              </div>
            </div>
              <div className='information-card-items'>
              <div className='text-center font'>
                <span className="fa fa-plus-square"></span>
              </div>
              <div className='px-3 text-center '>
                <h2 className='item-heading'>ऑपरेशन थियेटर</h2>
                <p>आधुनिक औजारों से लैस पृथक ऑपरेशन थियेटर की व्यवस्था</p>
              </div>
            </div>
          </div>
          <div className='tuladan-section'>
            <div>
            <img className='tauladan-img' src={tuladan} alt="" /></div>
            <div className='tuladan-tittle'>
              <h2 className='font'>तुलादान</h2>
              <p className='phara'> हमारे धर्म शास्त्रों में तुलादान का बहुत ही बड़ा महत्व है। मनुष्य अपने वजन के बराबर गौखाद्य सामग्री तोलकर गोमाता को अर्पित करता है, तो उसका बहुत ही पुण्य लाभ मिलता है। तुलादान करने से अनिष्ठ ग्रहों की शांति होती है और घर परिवार में सुख शान्ति समृद्धि बनी रहती है।</p>
              <button className='btn-oring'>सुविधायें</button>
            </div>

          </div>
        </div>
      </section>

      <section className='section-padding'>
        <div className='container'>
                  <div className='d-flex  flex-column items1 '>

          <div className='shree-banke-bihari-tempal'>
            <h2 className='font'>श्री बांके बिहारी</h2>
            <h1>मनोकामना पूर्ण करने  वाले श्री बांके बिहारी </h1>
            <p className='phara'>यहाँ श्री बांके बिहारी (गौमाता) जिसकी प्रतिदिन सुबह-शाम विधी-विद्यान से आरती की जाती है और आरती पश्चात् ही कर्मचारी भोजन करते है। श्री बांके बिहारी से श्रद्धाभाव से मन्नत मांगते है, समय पर उनकी मन्नत (मनोकामना) पूर्ण होने पर पूनः पधार कर पुष्पमाला पहनाकर, खाद्य सामग्री से तुलादान करवाकर आशीर्वाद लेते है।</p>
          </div>
          </div>
        </div>
      </section>
      <section id='about' className='section-padding'>
        <div className='container'>
          <div className='d-flex  flex-column items1'>
                  <div className='most-about'>
      <h2 className='font'>Most About श्री बांके बिहारी </h2>
      <div className='phargharf-scroll'>
<p className='phara'>1.विश्व स्तरीय गौ चिकित्सालय के लावारिस पीड़ाग्रस्त गोवंश को लाने हेतु पशु एम्बुलेन्स की व्यवस्था की गई है। 
  2.जिस स्थान से दुर्घटनाग्रस्त गोवंश लाये जाते हैं स्वस्थ होने के पश्चात् गोवंश को पुनः उसी स्थान पर छोड़ दिया जाता है। 
  3.मालिक अपने घरेलु बीमार गोवंश लेकर आता है तो उनको एक बीमार गोवंश के बदले में एक स्वस्थ गोवंश दिया जाता है। 
  4.गौशालाओं से एक बीमार गोवंश लेकर आते है तो उनको भी एक बीमार के बदले में एक स्वस्थ गोवंश दिया जाता है।
   5.निजी वाहन, वन विभाग एवं पुलिस प्रशासन के वाहन द्वारा आते हैं, ऐसे वन्य जीवों को लिया जाता है। 
   6.वन्य जीवों को स्वस्थ होने पर गौ चिकित्सालय वन विभाग को सुपुर्द कर देता है। 
   7.गो चिकित्सालय में स्वस्थ गोवंश एवं दूध देने वाली गायों को नहीं रखा जाता और ना ही लिया जाता है।
    8.जो स्थान एम्बुलेंस क्षैत्र की परिधि से बाहर है, ऐसे स्थान पर लावारिस गोवंश दुर्घटनाग्रस्त हो गया हो, तो वहां के संस्था से जुड़े दानपात्र सदस्य किराये का वाहन कर घायल गोवंश को गौ चिकित्सालय में भिजवा दें, 
    वाहन किराया में कुछ राशि कम रहती है उस राशि का भुगतान गौ चिकित्सालय द्वारा कर दिया जायेगा। 
    9.रात्रि में कोई लावारिस गोवंश दुर्घटनाग्रस्त हो गया है,जो संस्था से जुड़े हुए है वह किराये का वाहन कर दुर्घटनाग्रस्त गोवंश को गौ चिकित्सालय में भिजवा दें, 
    किराये में कुछ राशि कम रहती है, तो उस राशि का भुगतान कर दिया जायेगा।</p></div>
    </div>
    </div>
        </div>
      </section> 
<section className='section-padding'>
  <div className='container'>
<h2 className='font text-center font'>सब वेद पुराण भी, गऊ महिमा गाते है। <br />
गऊ रक्षा करने को, भगवान भी आते है।</h2>
<div className='cow-paap'>
<div className='cow-main-part'>
  <img className='cow-save' src={cowpaap} alt="" />
  <div className='cow-save-tittel'>
    <h2 className='stop '>stop cow slaughter </h2>
    <p> !!गाय हमारी माता है, इसका सम्मान और सुरक्षा करना हमारा धर्म है !!</p>
  </div>
</div>
</div>

</div>
 </section>






       <section className='section-padding'>
        <Footer/>
       </section>
    </div> 
  )
}

export default Header
