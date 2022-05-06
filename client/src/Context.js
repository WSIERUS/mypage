import { createContext } from "react";

const store = {
  headNaviButtons : [
    {id:0 ,name:'przykład', link:'/form'}
  ]
}

const context = createContext(store)

const contextProvider = context.Provider

export default context