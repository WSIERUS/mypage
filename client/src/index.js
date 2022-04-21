import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Form from './Form'

function renderRoot() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

function renderFormRoot() {
  const formRoot = ReactDOM.createRoot(document.getElementById('form-root'));
  formRoot.render(
    <React.StrictMode>
      <Form />
    </React.StrictMode>
  );
}

renderRoot()
renderFormRoot()


