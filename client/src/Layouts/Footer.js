import React from "react";

import FooterDescription from '../Components/FooterDescription'
import FooterNavi from '../Components/FooterNavi'

import './styles/Footer.css'

const Footer = () => {
  return(
    <div className="footer">
      <div className="footer-div">
        <FooterDescription/>
        <FooterNavi/>
      </div>
    </div>
  )
}

export default Footer