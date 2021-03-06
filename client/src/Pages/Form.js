import React, { useEffect, useRef, useState } from 'react'

import './styles/Form.css'

function Form() {

  const [isMoved, setIsMoved] = useState(false)

  const [name, setName] = useState('')
  const [nip, setNip] = useState('')
  const [typebusiness, setTypebusiness] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [email, setEmail] = useState('')

  const nameRef = useRef(null)

  useEffect(() => {
    nameRef.current.focus()
  }, [])

  function handleChangeName({target}) {
    const {value} = target
    if(value.length < 2) setName(value.toUpperCase())
    else setName(value)
  }

  function handleChangeNip({target}) {
    let {value} = target
    if(value.length <= 10 && value) {
      value = parseInt(value)
      if(!(value.toString() === 'NaN')) {
        setNip(value)
      }
    } else if(value.length < 1) {setNip('')}
  }

  function handleChangeTypebusiness({target}) {
    setTypebusiness(target.value)
  }

  function handleChangePhonenumber({target}) {
    let number = target.value.slice(4)
    if(number.length <= 9 && number) {
      number = parseInt(number)
      if(!(number.toString() === 'NaN')) {
        setPhonenumber(number)
      }
    } else if(number.length < 1) {setPhonenumber('')}
  }

  function handleChangeEmail({target}) {
    setEmail(target.value)
  }

  function handleSubmit(event) {
    if(name && nip.toString().length === 10 && typebusiness && phonenumber.toString().length === 9 && email) {console.log('poprawne')}
    else {
      event.preventDefault()
    }
  }

  function handleMoveButton(status) {
    setIsMoved(status)
  }

  return (
    <div className='form'>
    <form className="contact-form" method='post' action='/form' onSubmit={handleSubmit}>

      <div className='contact-form-title'>Formularz kontaktowy</div>

      <div className='contact-form-container'>
        <div className='contact-form-name'>Imię</div>
        <input 
          type="text" name='name' onChange={handleChangeName} ref={nameRef}
          value={name} className='contact-form-input'
        />
      </div>

      <div className='contact-form-container'>
        <div className='contact-form-name'>NIP</div>
        <input 
          type="text" name='nip' onChange={handleChangeNip}
          value={nip} className='contact-form-input'
        />
      </div>

      <div className='contact-form-container'>
        <div className='contact-form-name'>Branża</div>
        <input 
          type="text" name='typebusiness' onChange={handleChangeTypebusiness}
          value={typebusiness} className='contact-form-input'
        />
      </div>

      <div className='contact-form-container'>
        <div className='contact-form-name'>Numer telefonu</div>
        <input 
          type='text' name='phonenumber' onChange={handleChangePhonenumber}
          value={`+48 ${phonenumber}`} className='contact-form-input'
        />
      </div>

      <div className='contact-form-container'>
        <div className='contact-form-name'>Adres E-mail</div>
        <input 
          type="email" name='email' onChange={handleChangeEmail}
          value={email} className='contact-form-input'
        />
      </div>

      <input type="submit" name='submit' value='Wyślij!' 
        onMouseEnter={() => handleMoveButton(true)}
        onMouseLeave={() => handleMoveButton(false)}
        className={isMoved ? 'contact-form-submitbutton-moved' : 'contact-form-submitbutton'}
      />

    </form>
    </div>
  );
}

export default Form;
