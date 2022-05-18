import React from "react";

import './styles/AboutUsArticle.css'

const AboutUsArticle = ({title, descriptions}) => {

  return(
    <div className="aboutus-article">
      <div className="aboutus-article-title">{title}</div>
      <div className="aboutus-article-descriptions">
        {descriptions.map(des => <div className="aboutus-article-description" key={des}>{des}</div>)}
      </div>
    </div>
  )
}

export default AboutUsArticle