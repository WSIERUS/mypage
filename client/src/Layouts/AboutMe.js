import React, { useState } from "react";

import AboutMeDescription from "../Components/AboutMeDescription";
import ScrollInformation from "../Components/ScrollInformation";

import './styles/AboutMe.css'

// import Video from '../Video/Text.MOV'

import BuisnessMeetImage from '../Images/BuisnessMeet.jpg'
import CoodingImage from '../Images/Cooding.jpg'

let indexImage = 0

let isScrolled = false

function handleScrollChangeDesign() {
  if(window.scrollY < 10) {
    isScrolled = false
  }
  else if(window.scrollY >= 10) {
    isScrolled = true
  }
}

document.addEventListener('scroll', handleScrollChangeDesign)

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
        <div><AboutMeDescription /></div>
        {/* {isScrolled ? null : <ScrollInformation/>}  */}
      </div>
    </div>
  ) // Scroll jeszcze nie działa nakłada się na przyciski i buguje timer
}

export default AboutMe