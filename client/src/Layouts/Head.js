import React from 'react'

import Logo from '../Components/Logo'
import Button from '../Components/Button'

const Head = () => {
  return(
    <React.Fragment>
      <Logo />
      <div className='head-navi-buttons'>
        <Button name={'name'} link={'/form'}/>
      </div>
    </React.Fragment>
  )
}

export default Head