import React, { useState, useRef } from "react";
import Link from 'react-scroll'

import './styles/NaviButton.css'

const Button = ({name, scrollToPlace}) => {

  const [isMoved, setIsMoved] = useState(false)

  function handleMoveButton(trueOrFalse) {
    setIsMoved(trueOrFalse)
  }

  function handleClickButton(place) {
    console.log(`scrollowanie do ${place}`) // Brakuje jeszcze funkcji scroll bo nie ma struktury strony
  }

  return(

    <button 
      className={isMoved ? 'head-navi-button-moved' : "head-navi-button"}
      onMouseEnter={() => handleMoveButton(true)}
      onMouseLeave={() => handleMoveButton(false)}
      onClick={() => handleClickButton(scrollToPlace)}
    >
      {name}
    </button>

  )
}

export default Button