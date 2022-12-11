import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Component from './Component';
import App from './App';
import Setstate from './Setstate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Component name="Claire"/> */}
    <Setstate/>
  </React.StrictMode>
);