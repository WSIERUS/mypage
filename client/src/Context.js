import { createContext } from "react";

const store = {
  headNaviButtons : [
    {id:0, name:'O mnie', scrollToPlace: 'aboutme'},
    {id:0, name:'Portfolio', scrollToPlace: 'portfolio'},
    {id:0, name:'Dla klientów', scrollToPlace: 'forclient'},
    {id:0, name:'O mnie', scrollToPlace: 'contactwithus'},
  ]
}

const context = createContext(store)

export default context