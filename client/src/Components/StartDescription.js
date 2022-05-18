import React, {useContext, useState} from "react";

import context from "../Context";

import './styles/StartDescription.css'

let indexDescription = 0

function handleChangeIndexDescription() {
  if(indexDescription < 2) {
    indexDescription++
  }
  else if(indexDescription >= 2) {
    indexDescription = 0
  }
  
} setInterval(handleChangeIndexDescription, 10000)

const StartDescription = () => {
  
  const Context = useContext(context)

  const {aboutMeDescriptions} = Context

  const [refresh, setRefresh] = useState(false)

  setTimeout(()=>{setRefresh(!refresh)}, 1000)

  return(
    aboutMeDescriptions.map(des => <div id={des.id} key={des.id} className='start-description'>{des.description}</div>)
      .filter(des => des.props.id === indexDescription)
  )
}

export default StartDescription