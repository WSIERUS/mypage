import React, { useContext } from 'react'

import context from '../Context'

import AboutUsArticle from '../Components/AboutUsArticle'

import './styles/AboutUs.css'

const AboutUs = () => {

  const Context = useContext(context)

  const {aboutUsArticle} = Context
  // const {id, title, descriptions} = aboutUsDescriptions

  return(
    <div className='aboutus'>
      {aboutUsArticle.map(des => 
        <AboutUsArticle
          key={des.id} 
          title={des.title} 
          descriptions={des.descriptions}
        />)}
    </div>
  )
}

export default AboutUs