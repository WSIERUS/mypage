import React, {useContext, useState} from "react";

import context from "../Context";

import './styles/AboutMeDescription.css'

let indexDescription = 0

const AboutMeDescription = () => {
  
  const Context = useContext(context)

  const {aboutMeDescriptions} = Context

  const [description, setDescription] = useState(aboutMeDescriptions[(aboutMeDescriptions.length-1)])

  console.log(aboutMeDescriptions.length)

  function handleChangeDescription() {
    setDescription(aboutMeDescriptions[indexDescription])
    if(indexDescription < (aboutMeDescriptions.length - 1)) {
      indexDescription++
      // console.log(indexDescription)
    }
    else if(indexDescription >= (aboutMeDescriptions.length - 1)) {
      indexDescription = 0
      // console.log(indexDescription)
    }
  }

  setTimeout(handleChangeDescription, 5000)

  return(
    <div className="aboutme-description">{description}</div>
  )
}

export default AboutMeDescription