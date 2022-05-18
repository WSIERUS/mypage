import React from 'react'

import './styles/Form.css'

function Form() {
  return (
    <form className="form" method='post' action='/sendform'>

      <div>Zostaw do siebie kontakt. Oddzwonimy!</div>

      <div>
        <div>Imię</div>
        <input type="text" name='name'/>
      </div>

      <div>
        <div>NIP</div>
        <input type="number" name='nip'/>
      </div>

      <div>
        <div>Branża</div>
        <input type="text" name='typebusiness'/>
      </div>

      <div>
        <div>Numer telefonu</div>
        <input type='number' name='phonenumber'/>
      </div>

      <div>
        <div>Adres E-mail</div>
        <input type="email" name='email'/>
      </div>

      <input type="submit" name='submit' value='Wyślij!'/>

    </form>
  );
}

export default Form;
