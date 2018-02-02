const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
// import {App} from './App';
import {Notification} from './components/notification/Notification';

ReactDOM.render(
 <Notification/>,
//  <App/>,
 document.getElementById('root')
);