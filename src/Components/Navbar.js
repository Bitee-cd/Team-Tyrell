import React from 'react'
import '../Styled Components/Navbar.css';


function Navbar() {
  return (
    <div>
      <nav>
        <a href='https://internship.sidehustle.ng/' >SideHustle</a>
        <a href='https://instagram.com/sidehustleinternship?igshid=1sb7ei0owciam'>Images</a>
        <div className="navImages dots">
        <img src="https://static.thenounproject.com/png/10563-200.png" alt='dots'></img>
        </div>
        <div className="navImages avatar">
        <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt='logo'></img>
        </div>
       
        
      </nav>
    </div>
  )
}

export default Navbar
