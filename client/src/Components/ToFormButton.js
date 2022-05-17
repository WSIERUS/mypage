import React, { useState } from "react";
import {Link} from 'react-router-dom'

import './styles/ToFormButton.css'

const ToFormButton = () => {

  const [isMoved, setIsMoved] = useState(false)

  function handleButtonMove(status) {
    setIsMoved(status)
  }

  return(
    <Link to={'form'}>
      <button 
        className={isMoved ? "to-form-button-moved" : "to-form-button"}
        onMouseEnter={() => handleButtonMove(true)}
        onMouseLeave={() => handleButtonMove(false)}
      >
        To co zaczynamy?
      </button>
    </Link>
  )
}

export default ToFormButton