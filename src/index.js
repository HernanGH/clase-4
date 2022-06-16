import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Message from './Components/Message';

const root = ReactDOM.createRoot(document.getElementById('root'));

const saludar = () => console.log('Hola desconocido!!!')

// COMPONENTE CONTENEDOR
root.render(
  <React.StrictMode>
    <App name='Coderhouse' app='Mi aplicacion con React' saludaPapa={saludar}>
      Message
    </App>
    {/* <App name='Coderhouse' app='Mi aplicacion con React' saludaPapa={saludar}>
      <Message />
    </App>
    <App name='Coderhouse' app='Mi aplicacion con React' saludaPapa={saludar}>
      <h1>Message</h1>
    </App> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
