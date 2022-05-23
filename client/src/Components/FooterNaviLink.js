import React, { useState } from "react";
import {Link} from 'react-router-dom'

import './styles/FooterNaviLink.css'

const FooterNaviLink = ({name, link}) => {

  const [isMoved, setIsMoved] = useState(false)

  function handleMoveButton(status) {
    setIsMoved(status)
  }

  return(
    <Link to={link} style={{
      textDecoration:'none'
    }}>
      <div 
        className={isMoved ? "footer-navi-link-moved" : "footer-navi-link"}
        onMouseEnter={()=>handleMoveButton(true)}
        onMouseLeave={()=>handleMoveButton(false)}
      >
        {name}
      </div>
    </Link>
  )
}

export default FooterNaviLink