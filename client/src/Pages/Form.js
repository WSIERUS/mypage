import React from 'react'

import './styles/Form.css'

function Form() {
  return (
    <form className="form" method='post'>

      <div>Zostaw do siebie kontakt. Oddzwonimy!</div>

      <div>
        <div>Imię</div>
        <input type="text" />
      </div>

      <div>
        <div>NIP</div>
        <input type="number" />
      </div>

      <div>
        <div>Branża</div>
        <input type="text" />
      </div>

      <div>
        <div>Numer telefonu</div>
        <input type='number'/>
      </div>

      <div>
        <div>Adres E-mail</div>
        <input type="email" />
      </div>

      <input type="submit" name='submit' value='Wyślij!'/>

    </form>
  );
}

export default Form;
