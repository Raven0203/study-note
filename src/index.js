import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';




import Profile from './components/Profile/Profile';
import Profile3 from './components/Profile/Profile3';



import Search from './Test/Search';






ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <MainContext /> */}
      <App />

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

