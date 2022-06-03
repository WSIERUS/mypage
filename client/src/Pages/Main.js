import React from 'react'

import Head from '../Layouts/Head'
import Start from '../Layouts/Start'
import ForClient from '../Layouts/ForClient';
import ProcessStages from '../Layouts/ProcessStages';
import AboutUs from '../Layouts/AboutUs';
// import Portfolio from '../Layouts/Portfolio';
import Footer from '../Layouts/Footer'

function Main() {
  return (
    <React.Fragment>
      <Head />
      <Start />
      <ForClient />
      {/* <div style={{
        backgroundImage: "linear-gradient(#d6d6d6, rgb(0, 58, 124))",
        height: '10px'
      }}></div> */}
      <ProcessStages />
      {/* <div style={{
        backgroundImage: "linear-gradient(rgb(0, 58, 124), #d6d6d6)",
        height: '50px'
      }}></div> */}
      <AboutUs />
      {/* <Portfolio /> */}
      <Footer />
    </React.Fragment>
  );
}

export default Main;