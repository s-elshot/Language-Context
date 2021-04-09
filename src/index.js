import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LanguageContextProvider from "./context/LanguageContext";

ReactDOM.render(

  <React.StrictMode>
    <LanguageContextProvider>
        <App />
    </LanguageContextProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
