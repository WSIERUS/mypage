import React, { useContext } from "react";

import context from "../Context";

import './styles/FooterDescription.css'

const FooterDescription = () => {

  const Context = useContext(context)

  const {contact} = Context

  return(
    <div className="footer-description">
      <div className="footer-description-des">
        {contact.descriptions.map(des => <div>{des}</div>)}
      </div>
      <span className="footer-contact-phone">{contact.phone}</span>
      <span className="footer-contact-email">{contact.email}</span>
    </div>
  )
}

export default FooterDescription