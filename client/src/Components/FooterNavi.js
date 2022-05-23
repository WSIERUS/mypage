import React, { useContext } from "react";

import context from "../Context";

import FooterNaviLink from './FooterNaviLink'

import './styles/FooterNavi.css'

const FooterNavi = () => {

  const Context = useContext(context)

  const {footerNaviLinks} = Context

  return(
    <div className="footer-navi">
      {footerNaviLinks.map(naviLink => <FooterNaviLink key={naviLink.id} name={naviLink.name} link={naviLink.link} able={naviLink.able}/>)}
    </div>
  )
}

export default FooterNavi