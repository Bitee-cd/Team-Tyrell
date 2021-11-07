import React from 'react'
import '../Styled Components/Navbar.css';
import Googledots from '../img/google_dots.jpg';
import Sidehustlelogo from '../img/logo.png';

function Navbar() {
  return (
    <div>
      <nav>
        <a href='https://internship.sidehustle.ng/' >SideHustle</a>
        <a href='https://instagram.com/sidehustleinternship?igshid=1sb7ei0owciam'>Images</a>
        <img src={Googledots} alt='dots'></img>
        <img src={Sidehustlelogo} alt='logo'></img>
      </nav>
    </div>
  )
}

export default Navbar
