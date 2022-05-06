import React, { useContext } from 'react'

import context from '../Context'

import './styles/Head.css'

import Button from '../Components/NaviButton'
import NightMode from '../Components/NightMode'


const Head = () => {

  const Context = useContext(context)

  const {headNaviButtons} = Context

  return(
    <div className='head-bar'>

      <div className='head-navi-buttons'>

        {headNaviButtons.map(button => <Button // Generowanie przycisków na górze strony na podstawie kontekstu
          name={button.name} 
          scrollToPlace={button.scrollToPlace} 
          key={button.id}
        />)}

      </div>

      <NightMode />

    </div>
  )
}

export default Head