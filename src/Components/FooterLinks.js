import React from 'react'
import '../Styled Components/FooterLinks.css'

function FooterLinks({title}) {
    return (
        <div className='footerLinks'>
            <a href="#">{title}</a>
        </div>
    )
}

export default FooterLinks
