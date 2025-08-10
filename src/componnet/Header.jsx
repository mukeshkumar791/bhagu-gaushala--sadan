import React from 'react'
import cow from "../श्री बांके बिहारी गौ सेवा सदन(1)-Pica.png"
import './Header.css'
const Header = () => {
  return (
    <div>
       <nav>
        <div className='contanier'>
          <div className='navgation-bar'>
            <div>
              <img className='cow-logo' src={cow} alt="" />
            </div>
            <div>
              <ul className='nav-list'>
                <li>Home</li>
                <li>About us</li>
                <li>Gallery</li>
                <li>Contect us</li>            
               <li>Donation in kind</li>
              </ul>
            </div>
            <div>
              <button className='donation'>Donation now</button>
            </div>
          </div>
        </div>
      </nav> 
      <section>
        <div className='hero-section-back'>
          <div className='contanier'></div>
        </div>
      </section>

      {/* <div className='contanier'>
        <Donate/>
      </div> */}



    </div>
  )
}

export default Header
