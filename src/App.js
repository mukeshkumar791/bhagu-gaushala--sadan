import Header from './componnet/Header';
import Navbar from './componnet/Navbar.jsx';
import {Routes, Route,} from 'react-router-dom';
import About from './page/About';
import Donate from "./pages/Donate"
import Faciities from './page/Faciities.jsx';
import Help from './page/Help.jsx';
import Contact from './page/contect.jsx';
function App() {
  return (
    <>
    <Navbar/>
<Routes>
  <Route path="/" element={< Header/>} />
  <Route path="about" element={<About />}/>
  <Route path="/donate" element={< Donate/>}/>
  < Route path='/facilities' element={<Faciities/>}  />
  < Route path='/help' element={<Help/>}  />
  <Route path='contact' element={<Contact/>}/>
  </Routes>
    </>
  );
}

export default App;
