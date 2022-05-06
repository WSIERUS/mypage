import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Button = ({name, link}) => {

  const [isMoved, setIsMoved] = useState(false)

  function handleMoveButton(trueOrFalse) {
    setIsMoved(trueOrFalse)
  }

  return(
    <Link to={link}>
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