import React, { useState } from "react";
import {Link} from 'react-router-dom'

import './styles/FooterNaviLink.css'

const FooterNaviLink = ({name, link, able}) => {

  const [isMoved, setIsMoved] = useState(false)

  function handleMoveButton(status) {
    setIsMoved(status)
  }

  return(
    <Link to={ able ? link: __dirname } style={ able ? {
      textDecoration:'none'
    } : {
      textDecoration:'line-through',
      textDecorationColor:'#b4b4b4'
    }}>
      <div 
        className={able ? isMoved ? "footer-navi-link-moved" : "footer-navi-link" : 'footer-navi-link-disable'}
        onMouseEnter={()=>handleMoveButton(true)}
        onMouseLeave={()=>handleMoveButton(false)}
      >
        {name}
      </div>
    </Link>
  )
}

export default FooterNaviLink