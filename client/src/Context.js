import { createContext } from "react";

const store = {
  contact: {
    phone:'+48 668 107 846',
    email:'wojciechsieradzki35@gmail.com'
  },
  headNaviButtons : [
    {id:0, name:'O mnie', scrollToPlace: 'aboutme'},
    {id:1, name:'Dla klientów', scrollToPlace: 'forclient'},
    {id:2, name:'Portfolio', scrollToPlace: 'portfolio'},
  ],
  aboutMeDescriptions:[
    {id:0, description: 'Profesjonalna wycena oraz analiza potrzeb klienta'},
    {id:1, description: 'Strona dostosowana na urządzenia mobilne'},
    {id:2, description: 'Solidna jakość obsługi klienta'},
  ]
}

const context = createContext(store)

export default context