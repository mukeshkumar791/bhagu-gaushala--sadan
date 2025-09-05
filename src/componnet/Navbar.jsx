import '../componnet/Navbar.css'
import React from 'react';
import { NavLink } from "react-router-dom";
 import togglaimg from '../img/toggla3-removebg-preview.png'
 import logo from "../1.png"
export default function Navbar() {
  const closeMenu = () => {
    document.getElementById("menu-toggle").checked = false;
  };

  return (
    <div className='contanier'>
 <div className='logo'>
        <div className='d-flex logo-tittel '>
          <img src={logo} alt="gaulogo" />
          {/* <h2 className='gau'>गौ सेवा सदन</h2>  */}
        </div>


    <div>
      <input type="checkbox" id="menu-toggle" />

      <label htmlFor="menu-toggle" className="menu-icon">
        <img className="toggla-img" src={togglaimg} alt="toggle menu" />
      </label>

      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "li-list1 active" : "li-list1")}
          >
            Home
          </NavLink>
        </li>
     
             <li>
          <NavLink 
            to="/about" 
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "li-list1 active" : "li-list1")}
          >
          About
          </NavLink>
        </li>






        <li>
          <NavLink 
            to="/facilities" 
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "li-list1 active" : "li-list1")}
          >
            Facilities
          </NavLink>
        </li>
        {/* <li>
          <NavLink 
            to="/gallery" 
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "li-list1 active" : "li-list1")}
          >
            Gallery
          </NavLink>
        </li> */}
        <li>
          <NavLink 
            to="/help" 
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "li-list1 active" : "li-list1")}
          >
            Help
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "li-list1 active" : "li-list1")}
          >
            Contact
          </NavLink>
        </li>
        <div className='doners1'>
          <NavLink to="./donate" >
                <button className='btn-oring'>donate now</button>
            </NavLink>
            </div>
      </ul>
    </div>
    <div className="doners">
            <NavLink to="./donate" >
                <button className='btn-oring'>donate now</button>
            </NavLink>
          </div>
    </div>
    </div>
  );
}
