import React, { useContext } from "react";

import context from "../Context";

import ForClientArticle from "../Components/ForClientArticle";

import './styles/ForClient.css'

const ForClient  = () => {

  const Context = useContext(context)

  const {forClientArticles} = Context

  return(
    <div className="forclient" id="forclient">
      {forClientArticles.map(article => <ForClientArticle article={article} key={article.id}/>)}
    </div>
  )
}

export default ForClient