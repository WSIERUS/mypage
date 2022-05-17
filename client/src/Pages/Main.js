import React from 'react'

import Head from '../Layouts/Head'
import AboutMe from '../Layouts/AboutMe'
import ForClient from '../Layouts/ForClient';
import ProcessStages from '../Layouts/ProcessStages';
import Portfolio from '../Layouts/Portfolio';
import Footer from '../Layouts/Footer'

function Main() {

  return (
    <React.Fragment>
      <Head />
      <AboutMe />
      <ForClient />
      <ProcessStages/>
      <Portfolio />
      <Footer />
    </React.Fragment>
  );
} // portfolio, dla klientów, stopka

export default Main;