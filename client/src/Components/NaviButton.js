import React, { useState } from "react";
import { Link } from "react-scroll";

import './styles/NaviButton.css'

const Button = ({name, scrollToPlace}) => {

  const [isMoved, setIsMoved] = useState(false)

  function handleMoveButton(trueOrFalse) {
    setIsMoved(trueOrFalse)
  }

  return(
    <Link to={scrollToPlace} spy={true} smooth={true}>

      <button 
        className={isMoved ? 'head-navi-button-moved' : "head-navi-button"}
        onMouseEnter={() => handleMoveButton(true)}
        onMouseLeave={() => handleMoveButton(false)}
      >
        
        {name}

      </button>

    </Link>

  )
}

export default Button