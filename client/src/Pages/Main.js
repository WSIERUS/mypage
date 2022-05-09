import React from 'react'

import Head from '../Layouts/Head'
import AboutMe from '../Layouts/AboutMe'
import Portfolio from '../Layouts/Portfolio';
import ForClient from '../Layouts/ForClient';
import Footer from '../Layouts/Footer'

function Main() {

  return (
    <React.Fragment>
      <Head />
      <AboutMe />
      <ForClient />
      <Portfolio />
      <Footer />
    </React.Fragment>
  );
} // portfolio, dla klientów, dla rekruterów, stopka

export default Main;