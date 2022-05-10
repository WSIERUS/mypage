import React, { useState } from "react";

import './styles/AboutMe.css'

// import Video from '../Video/Text.MOV'

import BuisnessMeetImage from '../Images/BuisnessMeet.jpg'
import CoodingImage from '../Images/Cooding.jpg'

let index = 0

const AboutMe = () => {

  const imageArray = [BuisnessMeetImage, CoodingImage]

  const [image, setImage] = useState(imageArray[(imageArray.length-1)])

  function handleChangeImage() {
    setImage(imageArray[index])
    if(index < (imageArray.length - 1)) return index++
    else if (index >= (imageArray.length - 1)) return index = 0
  }

  setTimeout(handleChangeImage, 10000)

  return(
    <div style={{
      backgroundImage: `url(${image})`,
      transitionDuration: '1s',
      transitionProperty: 'background-image'
    }} className='bakcground-image'>
      <div className="aboutme" id="aboutme">
        Jestem Programistą Webowym, który tworzy strony na zlecenia klientów.
      </div>
    </div>
  )
}

export default AboutMe