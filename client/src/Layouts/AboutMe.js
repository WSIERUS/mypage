import React, { useState } from "react";

import AboutMeDescription from "../Components/AboutMeDescription";

import './styles/AboutMe.css'

// import Video from '../Video/Text.MOV'

import BuisnessMeetImage from '../Images/BuisnessMeet.jpg'
import CoodingImage from '../Images/Cooding.jpg'

let indexImage = 0

const AboutMe = () => {

  const imageArray = [BuisnessMeetImage, CoodingImage]

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
        <AboutMeDescription />
      </div>
    </div>
  )
}

export default AboutMe