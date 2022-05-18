import React, { useContext, useState } from 'react'

import context from '../Context'

import AboutUsArticle from '../Components/AboutUsArticle'
import ChangeDisplayArrow from '../Components/ChangeDisplayArrow'

import './styles/AboutUs.css'

let indexDisplay = 0

const AboutUs = () => {

  const Context = useContext(context)

  const {aboutUsArticles} = Context

  let [indexDisplayArticle, setIndexDisplayArticle] = useState(0)

  function handleChangeIndexDiplayArticle(direction) {
    if(direction === 'right') {
      if(indexDisplay < (aboutUsArticles.length - 1)){
        indexDisplay ++
      }
    }
    else if(direction === 'left') {
      if(indexDisplay > 0){
        indexDisplay --
      }
    }
    setIndexDisplayArticle(indexDisplay)
  }

  return(
    <div className='aboutus' id='aboutus'>

      <ChangeDisplayArrow 
        handleChangeIndexDiplayArticle={handleChangeIndexDiplayArticle} 
        indexDisplay={indexDisplay} 
        direction={'left'}
        key={'left'}
      />

      {aboutUsArticles.map(des =>
        <AboutUsArticle
          key={des.id}
          id={des.id}
          title={des.title}
          descriptions={des.descriptions}
        />)
        .filter(article => article.props.id === indexDisplayArticle)}

        <ChangeDisplayArrow 
          handleChangeIndexDiplayArticle={handleChangeIndexDiplayArticle} 
          indexDisplay={indexDisplay} 
          direction={'right'}
          key={'right'}
        />

    </div>
  )
}

export default AboutUs