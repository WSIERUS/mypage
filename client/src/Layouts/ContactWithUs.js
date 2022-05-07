import React, {useContext} from "react";

import context from '../Context'

import ToFormButton from "../Components/ToFormButton";

import './styles/ContactWithUs.css'

const ContactWithUs = () => {

  const Context = useContext(context)

  const {contact} = Context

  return(
    <div className="contactwithus" id='contactwithus'>
      <article>Skontaktuj się z nami w celu poznania szczegółów oraz kosztu twojego zlecenia.</article>
      <span className="contact-phone">{contact.phone}</span>
      <span className="contact-email">{contact.email}</span>
      <ToFormButton/>
    </div>
  )
}

export default ContactWithUs