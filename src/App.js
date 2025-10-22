import Home from './componnet/Home.jsx';
import Navbar from './componnet/Navbar.jsx';
import {Routes, Route,} from 'react-router-dom';
import About from './page/About';
import Donate from "./pages/Donate"
import Faciities from './page/Faciities.jsx';
import Help from './page/Help.jsx';
import Contact from './page/contect.jsx';
// import Login from './componnet/login'
// import Sign from './componnet/Sign';
function App() {
  return (
    <>
    {/* <Login/> */}
    {/* <Sign/> */}
    { <Navbar/> }
 { <Routes>
  <Route path="/" element={< Home/>} />
  <Route path="/about" element={<About />}/>
  <Route path="/donate" element={< Donate/>}/>
  <Route path='/facilities' element={<Faciities/>}  />
  <Route path='/help' element={<Help/>}  />
  <Route path='/contact' element={<Contact/>}/>
  </Routes> }
    </>
  );
}

export default App;
