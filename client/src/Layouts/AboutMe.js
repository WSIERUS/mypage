import React, { useContext, useState } from "react";

import context from '../Context'

import AboutMeDescription from "../Components/AboutMeDescription";

import './styles/AboutMe.css'

let indexImage = 0

const AboutMe = () => {

  const Context = useContext(context)

  const imageArray = Context.backgroundImages

  const [image, setImage] = useState(imageArray[(imageArray.length-1)])

  function handleChangeImage() {
    setImage(imageArray[indexImage])
    if(indexImage < (imageArray.length - 1)) return indexImage++
    else if (indexImage >= (imageArray.length - 1)) return indexImage = 0
  }

  setTimeout(handleChangeImage, 7000)

  return(
    <div style={{
      backgroundImage: `url(${image})`,
      transitionDuration: '1s',
      transitionProperty: 'background-image'
    }} className='bakcground-image'>
      <div className="aboutme" id="aboutme">
        <div><AboutMeDescription /></div>
      </div>
    </div>
  )
}

export default AboutMe