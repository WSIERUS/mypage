import { createContext } from "react";

const store = {
  headNaviButtons : [
    {id:0, name:'przykład', scrollToPlace:'/form'},
  ]
}

const context = createContext(store)

export default context