import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import required css file
import './bmi.css';
import App from './App2';
import AjaxApi from './AjaxApi';
// import your newly created function component here
import AgeCalculator from './agecalculator';
import BmiCalculator from './Bmi';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <AgeCalculator />
     


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
