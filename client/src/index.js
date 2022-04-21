import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const formRoot = ReactDOM.createRoot(document.getElementById('form-root'));
formRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
