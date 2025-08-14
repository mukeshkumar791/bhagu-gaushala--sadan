import Header from './componnet/Header';
import Navbar from './componnet/Navbar';
import {Routes, Route,} from 'react-router-dom';
import About from './page/About';
import Donate from "./pages/Donate"
function App() {
  return (
    <>
    <Navbar/>
<Routes>
  <Route path="/" element={< Header/>} />
  <Route path="/about" element={<About />}/>
  <Route path="/donate" element={< Donate/>}/>
  </Routes>
    </>
  );
}

export default App;
