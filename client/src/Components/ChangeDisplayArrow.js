import React, { useContext, useState } from "react";

import context from "../Context";

import './styles/ChangeDisplayArrow.css'

const ChangeDisplayArrow = ({handleChangeIndexDiplayArticle, indexDisplay, name, direction}) => {

  const Context = useContext(context)
  
  const {aboutUsArticles} = Context

  const [isMoved, setIsMoved] = useState(false)

  function handleMovedArrow(isTrue) {
    setIsMoved(isTrue)
  }

  return(
    <div 
      onClick={() => handleChangeIndexDiplayArticle(direction)} 
      onMouseEnter={() => handleMovedArrow(true)}
      onMouseLeave={() => handleMovedArrow(false)}
      className={indexDisplay === (direction === 'left' ? 0 : (aboutUsArticles.length - 1)) ? 'aboutus-arrow-disable' : isMoved ? 'aboutus-arrow-moved' : 'aboutus-arrow'}
    >
      {direction === 'left' ? '<' : '>'}
    </div>
  )
}

export default ChangeDisplayArrow