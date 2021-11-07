import React from 'react'
import '../Styled Components/Footer.css'
import FooterLinks from './FooterLinks'

function Footer() {
    return (
        <div className='footer'>
            <p>Nigeria</p>
            <hr />
            <div className="middle">
                    <img src="https://e7.pngegg.com/pngimages/723/750/png-clipart-leaf-green-leaf-food-leaf-thumbnail.png" alt="" />
                    <FooterLinks title="Carbon Neutral since 2007"/>
            </div>
            <div className="links">
                <div className="secondDiv">
                    <FooterLinks title="About"/>
                    <FooterLinks title="Advertising"/>
                    <FooterLinks title="Business"/>
                    <FooterLinks title="How it Works"/>
                </div>
                <div className="end">
                    <FooterLinks title="Privacy"/>
                    <FooterLinks title="Terms"/>
                    <FooterLinks title="settings"/>
                </div>
            </div>
        </div>
    )
}

export default Footer
