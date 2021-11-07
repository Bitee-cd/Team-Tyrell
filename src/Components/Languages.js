import React from 'react'
import '../Styled Components/Languages.css'

function Languages({language}) {
    return (
        <div className="lang">
          <a href="#">{language}</a>  
        </div>
    )
}

export default Languages
