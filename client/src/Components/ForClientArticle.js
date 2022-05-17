import React from "react";

import './styles/ForClientArticle.css'

const ForClientArticle = ({article}) => {

  const {id, src, title, descriptions} = article

  // console.log(id, src, title, descriptions)

  let indexArticleDescription = 0

  return(
    <div className={id%2 ? "forclient-article-right" : "forclient-article-left"}>
      <div className="forclient-article">
        {title ? <article className="forclient-article-title">{title}</article> : null}
        {descriptions.map(description => {
          indexArticleDescription++
          return <article className="forclient-article-description" key={indexArticleDescription}>
            {description}
          </article>
        })}
      </div>
      <img src={src} alt="" className="forclient-article-img"/>
    </div>
  )
}

export default ForClientArticle