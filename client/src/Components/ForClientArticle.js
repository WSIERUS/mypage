import React from "react";

import './styles/ForClientArticle.css'

const ForClientArticle = ({article}) => {

  const {id, src, description} = article

  console.log(id,src,description)

  return(
    <div className={id%2 ? "forclient-article-right" : "forclient-article-left"}>
    <article className="forclient-article-description">{description}</article>
    <img src={src} alt="" className="forclient-article-img"/>
    </div>
  )
}

export default ForClientArticle