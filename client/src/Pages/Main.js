import React from 'react'

import Head from '../Layouts/Head'
import Start from '../Layouts/Start'
import ForClient from '../Layouts/ForClient';
import ProcessStages from '../Layouts/ProcessStages';
import Portfolio from '../Layouts/Portfolio';
import Footer from '../Layouts/Footer'

function Main() {

  return (
    <React.Fragment>
      <Head />
      <Start />
      <ForClient />
      <ProcessStages/>
      <Portfolio />
      <Footer />
    </React.Fragment>
  );
} // portfolio, dla klientów, stopka

export default Main;