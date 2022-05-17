import { createContext } from "react";
 
import Image1 from './Images/Cooding.jpg'
import Image2 from './Images/BuisnessMeet.jpg'

const store = {

  contact : {
    phone:'+48 668 107 846',
    email:'wojciechsieradzki35@gmail.com'
  },

  headNaviButtons : [
    {id:0, name:'START', scrollToPlace: 'aboutme'},
    {id:1, name:'KLIENT', scrollToPlace: 'forclient'},
    {id:1, name:'KONTAKT', scrollToPlace: 'processstages'},
    {id:2, name:'O NAS', scrollToPlace: 'portfolio'},
  ],

  backgroundImages : [Image1, Image2],

  aboutMeDescriptions : [
    {id:0, description: 'Profesjonalna wycena oraz analiza potrzeb klienta'},
    {id:1, description: 'Strona dostosowana na urządzenia mobilne'},
    {id:2, description: 'Solidna jakość obsługi klienta'},
  ],

  forClientArticles : [
    {
      id:0, src: null, 
      title:'Dostosowanie na urządzenia mobilne', 
      descriptions:[
        'Nawet 80% użytkowników odwiedzających strony internetowe korzysta z smartfonu.',
        'Dlatego bardzo ważne jest stworzenie strony responsywnej dla każdej rozdzielczości oraz orientacji urządzenia.'
      ],
    },
    {
      id:1, src: null, 
      title:'Profesjonalna analiza potrzeb twojego klienta', 
      descriptions:[
        'Dostosowanie strony w odpowiedni sposób nie tylko pozwoli zwiększyć portfel klientów ale również podnieść poziom zadowolenia z oferowanych usług.',
        'Kwestia zaprojektowania strony jest istotnym elementem całego procesu.'
      ],
    },
    {
      id:2, src: null, 
      title:'Odpowiednia wycena', 
      descriptions:[
        'Do każdego projektu podchodzimy indywidualnie i szukamy odpowiednich rozwiązań',
        'Nie działamy szablonowo.',
        'Wychodzimy z założenia, że każdy klient ma inne oczekiwania względem oferowanych usług'
      ],
    },
    {
      id:3, src: null, 
      title:'Obsługa po zakończonym projekcie', 
      descriptions:[
        'Możesz liczyć na naszą pomoc nawet po zakończonym projekcie.',
        'Dajemy gwarancję zadowolenia z oddanego produktu.',
      ],
    },
  ],

  processStages:[
    {id:0, name:'Kontaktujemy się i ustalamy wstępne założenia'},
    {id:1, name:'Analizujemy Twoje wymagania i przedstawiamy ofertę'},
    {id:2, name:'Tworzymy i oddajemy gotową stronę'},
  ]

}

const context = createContext(store)

export default context