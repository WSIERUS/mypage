import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';

import Main from './Pages/Main';
import Form from './Pages/Form'

function renderRoot() {

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Main />} />
        <Route path='form' element={< Form />} />
      </Routes>
    </BrowserRouter>
  )
}

renderRoot()