import React from 'react'

import './styles/Form.css'

function Form() {
  return (
    <form className="contact-form" method='post' action='/sendform'>

      <div className='contact-form-title'>Zostaw do siebie kontakt. Oddzwonimy!</div>

      <div className='contact-form-container'>
        <div className='contact-form-name'>Imię</div>
        <input type="text" name='name' className='contact-form-name-input'/>
      </div>

      <div className='contact-form-container'>
        <div className='contact-form-nip'>NIP</div>
        <input type="number" name='nip' className='contact-form-nip-input'/>
      </div>

      <div className='contact-form-container'>
        <div className='contact-form-typebusiness'>Branża</div>
        <input type="text" name='typebusiness' className='contact-form-typebusiness-input'/>
      </div>

      <div className='contact-form-container'>
        <div className='contact-form-phonenumber'>Numer telefonu</div>
        <input type='number' name='phonenumber' className='contact-form-phonenumber-input'/>
      </div>

      <div className='contact-form-container'>
        <div className='contact-form-email'>Adres E-mail</div>
        <input type="email" name='email' className='contact-form-email-input'/>
      </div>

      <input type="submit" name='submit' value='Wyślij!' className='contact-form-submitbutton'/>

    </form>
  );
}

export default Form;
