import React from "react";
import {Link} from 'react-router-dom'

import './styles/ToFormButton.css'

const ToFormButton = () => {
  return(
    <Link to={'form'}>
      <button className="to-form-button">
        Wypełnij Formularz
      </button>
    </Link>
  )
}

export default ToFormButton