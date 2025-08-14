import React from 'react'
import { NavLink } from 'react-router-dom';
import '../componnet/Header.css';
// import toggalicon from "../img/toggle-icon.jpeg"
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='container'>
          <div className='nav-bar'>
            <div className='logo-tittel d-flex'>
              <img src="" alt="gaulogo" />
              <h2 className='gau'>गौ सेवा सदन</h2>
            </div>
            <div>
              <ul className='nav-list'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/facilities">Facilities</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
                <li><NavLink to="/help">Help</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div> 
            <div>
              {/* <img className='togglaicon' src={toggalicon} alt="" /> */}
            </div>
            <div>
              <NavLink to="./donate" >
                <div className="doners">
                  <button className='btn-oring'>donate now</button>
                </div>
              </NavLink>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
