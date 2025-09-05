import React from 'react'
import servies from "../img/service1.png"
import servies2 from '../img/service2.png'
import servies3 from "../img/service3.png"
import servies4 from "../img/service4.png"
import batagodham from "../img/batagodham.jpg"
import acroom from '../img/ac_room.jpg'
import gaushalaambulance from "../img/Ambulance1.jpg"
import tuladanimg from "../img/tt454662561-076.jpg"
import Footer from "../componnet/Footer"
import './Facilites.css'
const Faciities = () => {
  return (
    <div>
      <div className='contanier'>
        <div className='facilitespart-1'>
          <div className='faci-card'>
            <img  className='servies-img' src={servies} alt="" />
            <h3 className='card-h'>एक्स-रे रूम</h3>
            <p className='servies-card-p'>पीड़ाग्रस्त गौवंश के हड्डी फैक्चर, गौवंश के गले व फैफड़े, हार्ट आदि में लोहे व अन्य धातु ( फोरेनबोडी)
              फंसने की जानकारी हेतु 500 एम.ए. व 100 एम.ए. की आधुनिक एक्सरे मशीनों से एक्स-रे द्वारा तुरन्त पता
              लगाकर गौ हितार्थ के साथ डिजिटल मशीन के माध्यम से कम्पयुटर द्वारा फैक्चर या अन्य कोई धातु को देखकर
              तुरन्त उपचार कार्य शुरू कर गौवंश को राहत पहुंचाई जाती है।</p>
          </div>
          <div className='faci-card'>
            <img   className='servies-img'  src={servies2} alt="" />
            <h3 className='card-h'>ऑपरेशन थियेटर</h3>
            <p className='servies-card-p'>प्रति दिन घावों की सफाई कर पट्टियां करना, सींग के कैंसर, फ्रैक्चर व
              शरीर पीडीत गौवंश का उपचार करना, बच्चादानी नहीं खुलने पर जीवित बच्चा या मृत बच्चा पेट से बाहर निकालना,
              गौवंश के पेट से प्लास्टिक मलबा निकालना पेट के अन्य रोगों के ऑपरेशन (शल्य-चिकित्सा) के लिए आधुनिक औजारों से लैस पृथक ऑपरेशन थियेटर की व्यवस्था है।</p>
          </div>


        </div>
        <div className='facilitespart-1'>
          <div className='faci-card'>
            <img  className='servies-img' src={servies4} alt="" />
            <h3 className='card-h'>R O प्लांट का मिनरल वाटर</h3>
            <p className='servies-card-p'>गो चिकित्सालय में पीड़ित गौवंश के स्वास्थ्य का पुरा ख्याल रखा जाता है, गौवंश को आरो प्लांट द्वारा फिल्टर (मिनरल वाटर) पिलाया जाता है।</p>
          </div>
          <div className='faci-card'>
            <img className='servies-img' src={servies3} alt="" />
            <h3 className='card-h'>गौमाता बिस्तर रूम</h3>
            <p className='servies-card-p'>सर्दी के मौसम में सभी बीमार गौवंश व वन्यजीवों को गर्म कम्बल ओढ़ाए जाते है और सभी वार्डो को चारों तरफ से मखमली दरियों द्वारा ढ़का जाता है।</p>
          </div>
        </div>
      </div>
       <section className='sect'>
        <div className='bacgroud-color1'>
          <div className='container'>
            <div className='main-content'>
            <div>
              <img src={tuladanimg} alt="" />
              </div>
              <div className='batagodham'>
              <h5 className='text-center tuladan-heading'>तुलादान</h5>
              <h3 className='text-h3'>
                हमारे धर्म शास्त्रों में तुलादान का बहुत ही बड़ा महत्व है।</h3>
              <p className='main-content-p'>मनुष्य अपने वजन के बराबर गौखाद्य सामग्री तोलकर गौमाता को अर्पित करता है, तो उसका बहुत ही पुण्य लाभ मिलता है। तुलादान करने से अनिष्ठ ग्रहों की शांति होती है और घर परिवार में सुख शान्ति समृद्धि बनी रहती है। द्वारका तीर्थ में भगवान श्रीकृष्ण ने
                अपना तुलादान करवाकर मानव जाति को सन्देश दिया की जीवन में एक बार तुलादान करवाकर गौ खाद्य सामग्री गौमाता को अर्पण करावें। इससे पूर्व व इस जन्म के पापों से मुक्ति प्राप्त होती है।</p>
              <p className=" littel-p ">
                नवजात शिशु का सिक्को सेclas
                 तुलादान
                गो खाद्य सामग्री गुड़ व खल से तुलादान
                गो खाद्य सामग्री से तुलादान
                गो खाद्य सामग्री खल से तुलादान
                रिजगा (हरा चारा) से तुलादान
              </p>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <section className='sect'>
        <div className='container'>
          <div className=''>
            <h1 className='text-center py-5 headig-faci'>श्री बांके बिहारी गौशाला में सुविधायें</h1>
            <div className=' main-content'>
              <div className='batagodham'>
                <h3 className='text-h3'>विशालकाय बांटा गोदाम</h3>
                <p className='main-content-p'>यहाँ विशालकाय बांटा गोदाम में पीड़ाग्रस्त गौवंश के लिए पौष्टिक आहार जैसे खल, गुड़, चुरी, जौ,
                  लापसी हेतु गेहुं का बाट, बाजरी का दलिया, चापड़, उच्च क्वालिटी का तेल आदि पौष्टिक आहार रखा गया है बाजरी का दलिया बड़ी मात्रा
                  में प्रतिदिन लगता है इस हेतु दो बड़ी आटा चक्कियां द्वारा पीसा जाता है। इसी के साथ में वन्यजीवों हेतु विभिन्न प्रकार के अनाज की भी व्यवस्था
                  रहती है और पक्षियों हेतु चूण (अनाज) रहता है गौभक्त भी निम्नानुसार इस प्रकार की गौवंश हेतु खाद्य सामग्री भेजकर पुण्य लाभ ले सकते है। यह
                  विशालतम बांटा गोदाम 100x40 फिट बड़ा जिसमें हजारों टन (दर्जनों ट्रक)
                  खाद्य सामग्री को रखा जाता है, ज्ञात रहे उसी अनुसार वापस बड़ी मात्रा में प्रतिदिन 8 टन (8 हजार किलो) 25 कढ़ाइयों में खाद्य सामग्री लगती है।</p>
              </div>
              <div>
                <img className='acroom-img' src={batagodham} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className='sect'>
        <div className='container'>
          <div  className=' main-content'>
            <div>
              <img className='acroom-img' src={acroom} alt="" />
            </div>
            <div className='batagodham '>
              <h3  className='text-h3'>यात्रियों हेतु रूम</h3>
              <p className=' main-content-p'>गो चिकित्सालय परिसर में ही दूर-दराज से आने वाले यात्रियों के लिए रात्रि विश्राम हेतु
                यात्री रूम बने हुए है जो बहुत ही कम शुल्क में एसी-नाॅन एसी रूम उपलब्ध है। प्याऊ पर निःशुल्क चाय, शुद्ध जल, दैनिक अखबार,
                भोजन, गर्म पानी हेतु गिजर, वाटर कुलर, पार्किग सुविधा, वाहन सर्विस सुविधा, शांत एवं खुला वातावरण इत्यादि विभिन्न प्रकार की सुविधा उपलब्ध है।</p>
            </div>
          </div>
        </div>
      </section> 
   
       <section className='sect'>
        <div className='container'>
          <div className='main-content'>
            <div>
              <img className='ambulance' src={gaushalaambulance} alt="" />
            </div>
            <div className='sewa-ambu'>
              <h2>
                एम्बुलेंस सेवा
              </h2>
              <div className='sewa-text'>एम्बुलेन्स सेवा के लिए दूरभाष <b className='phone-number'>6280909078</b>  पर सूचना दें</div>
              <p> श्री बांके बिहारी गौशाला   की एम्बुलेंस सेवा सबसे अनोखी और उत्तम है।  गौ की एम्बुलेन्स प्रतिदिन अपनी सेवाएं निरन्तर दे रही है। किसी भी स्थान पर कोई भी लावारिस गौवंश, दुर्घटनाग्रस्त । आपातकालीन स्थिति में गौ चिकित्सालय की एम्बुलेन्स उपलब्ध नहीं रहती है, तो किराये का वाहन उक्त स्थान पर भेजकर पीड़ा से कराह रहे गौवंश को लाकर उपचार किया जाता है। विश्व स्तरीय गौ चिकित्सालय का मुख्य उद्देश्य यही है, कि उपचार एवं ईलाज के अभाव में कोई भी गौवंश काल का ग्रास नहीं बने। ऐसी एम्बुलेन्स सेवा हिन्दुस्थान में शायद ही कहीं उपलब्ध हैं।
                भारतीय संस्कृति का आधार गौमाता की ऐसी सेवा जहाँ सिर्फ दुर्घटना से पीडीत गौमाता को नया जीवनदान प्रदान करना ही एकमात्र लक्ष्य है आज इस कलयुग मे दुर्लभ है।</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Faciities

