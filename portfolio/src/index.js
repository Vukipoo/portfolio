import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);



reportWebVitals();

//todo
// change name
// remove portfolio and dashboard from sidebar
// change github and linkedin links to mine
// remove youtube and whatever else
// change about page paragraph
// spice it up in my own way
// emailjs
// check out some whatver trail before publishw
// publish