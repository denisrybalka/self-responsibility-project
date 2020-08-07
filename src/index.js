import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';

import './index.scss';

import App from './components/app/app.js';

ReactDOM.render(
  <React.StrictMode>
	  <HashRouter basename="/">
	  	<App/>
	   </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);