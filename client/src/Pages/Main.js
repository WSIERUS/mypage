import React from 'react'

import Head from '../Layouts/Head'
import AboutMe from '../Layouts/AboutMe'
import Portfolio from '../Layouts/Portfolio';
import MiddleForBusinessman from '../Layouts/MiddleForBusinessman';
import MiddleForRecruiter from '../Layouts/MiddleForRecruiter';
import Footer from '../Layouts/Footer'

function Main() {
  return (
    <React.Fragment>
      <Head />
      <AboutMe />
      <Portfolio />
      <MiddleForBusinessman />
      <MiddleForRecruiter />
      <Footer />
    </React.Fragment>
  );
} // portfolio, dla klientów, dla rekruterów, stopka

export default Main;