import React from "react";

import './styles/ScrollInformation.css'

import Mouse from '../Icons/Mouse.png'

const ScrollInformation = () => {
  return(
    <div className="scroll-information">
      <img src={Mouse} alt="Scroll" className="scroll-mouse"/>
    </div>
  )
}

export default ScrollInformation