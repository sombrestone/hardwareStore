import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import config from './utils/config'



ReactDOM.render(
  <BrowserRouter>
    <App config={config}/>
  </BrowserRouter>,
  document.getElementById('root')
);

