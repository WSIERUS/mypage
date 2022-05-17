import React from "react";

import './styles/ProcessStage.css'

const ProcessStage = ({name, id}) => {
  return(
    <div className="processstages-stage">
      {id === 0 ? null : <div className="processstages-stage-arrow"></div>}
      <div className="processstages-stage-name">{name}</div>
    </div>
  )
}

export default ProcessStage