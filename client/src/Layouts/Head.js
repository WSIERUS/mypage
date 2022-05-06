import React, { useContext } from 'react'

import './styles/Head.css'

import Logo from '../Components/Logo'
import Button from '../Components/Button'
import context from '../Context'

const Head = () => {

  const Context = useContext(context)

  const {headNaviButtons} = Context

  return(
    <div className='head-bar'>
      <Logo />
      <div className='head-navi-buttons'>
        {headNaviButtons.map(button => <Button name={button.name} link={button.link} key={button.id}/>)}
      </div>
    </div>
  )
}

export default Head