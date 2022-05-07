import React, { useState } from "react";
import { Link } from "react-scroll";

import './styles/NaviButton.css'

const Button = ({name, scrollToPlace}) => {

  const [isMoved, setIsMoved] = useState(false)

  function handleMoveButton(trueOrFalse) {
    setIsMoved(trueOrFalse)
  }

  return(

    <button 
      className={isMoved ? 'head-navi-button-moved' : "head-navi-button"}
      onMouseEnter={() => handleMoveButton(true)}
      onMouseLeave={() => handleMoveButton(false)}
    >
      <Link to={scrollToPlace} spy={true} smooth={true}>
        {name}
      </Link>
    </button>

  )
}

export default Button