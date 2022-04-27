import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form'

function renderRoot() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
      {fetch('/form', {}).then(
        () => <Form/>
      )}
    </React.StrictMode>
  )}
