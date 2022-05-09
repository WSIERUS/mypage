import { createContext } from "react";

const store = {
  contact: {
    phone:'+48 668 107 846',
    email:'wojciechsieradzki35@gmail.com'
  },
  headNaviButtons : [
    {id:0, name:'O mnie', scrollToPlace: 'aboutme'},
    {id:0, name:'Dla klientów', scrollToPlace: 'forclient'},
    {id:0, name:'Portfolio', scrollToPlace: 'portfolio'},
  ],

}

const context = createContext(store)

export default context