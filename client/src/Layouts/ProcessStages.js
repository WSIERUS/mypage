import React, { useContext } from 'react'

import context from '../Context'

import ProcessStage from '../Components/ProcessStage'
import ToFormButton from '../Components/ToFormButton'

import './styles/ProcessStages.css'

const ProcessStages = () => {

  const Context = useContext(context)

  const {processStages} = Context

  return(
    <div className='processstages'>
      {processStages.map(stage => <ProcessStage key={stage.id} name={stage.name} id={stage.id}/>)}
      <ToFormButton/>
    </div>
  )
}

export default ProcessStages