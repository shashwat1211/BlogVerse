import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
const Footer = () => {
  return (
    <footer>
    <div className='footer' style={{bottom:0}}>
        <h3 style={{color:"white" , fontWeight:"400"}}>&copy; SR</h3>
        <div style={{marginTop:"8px"}}>
              <a href="mailto:shashwatraj30@email.com"><FontAwesomeIcon icon={faEnvelope} size="lg" style={{ color: "white", }} /></a>
              <a href="https://www.linkedin.com/in/shashwat-raj-090016236/"><FontAwesomeIcon icon={faLinkedinIn} size='lg' style={{color:"white"}} /></a>

        </div>
    </div>
    </footer>
  )
}

export default Footer