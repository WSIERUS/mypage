import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';

import App from './App';
import Form from './Form'

function renderRoot() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='form' element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  )
}

renderRoot()