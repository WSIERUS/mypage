import { createContext } from "react";

const store = {
  headNaviButtons : [
    {id:0, name:'przykład', scrollToPlace: ''},
  ]
}

const context = createContext(store)

export default context