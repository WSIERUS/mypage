import React, { useContext, useState } from 'react'

import context from '../Context'

import './styles/Head.css'

import Button from '../Components/NaviButton'


const Head = () => {

  const Context = useContext(context)

  const {headNaviButtons} = Context

  const [isScrolled, setIsScrolled] = useState(true)

  function handleScrollChangeDesign() {
    if(window.scrollY < 10) {
      setIsScrolled(true)
    }
    else if(window.scrollY >= 10) {
      setIsScrolled(false)
    }
  }

  document.addEventListener('scroll', handleScrollChangeDesign)

  return(
    <div className={isScrolled ? 'head-bar-opacity' : 'head-bar'}>

      <div className='head-navi-buttons'>

        {headNaviButtons.map(button => <Button // Generowanie przycisków na górze strony na podstawie kontekstu
          name={button.name} 
          scrollToPlace={button.scrollToPlace} 
          key={button.id}
        />)}

      </div>

    </div>
  )
}

export default Head