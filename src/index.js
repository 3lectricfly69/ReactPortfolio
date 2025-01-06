import React from 'react';
import {configure} from '@testing-library/react-native'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

configure({asyncUtilTimeout: 20000})
ReactDOM.render(
<React.StrictMode>
    <App />
</React.StrictMode>,
document.getElementById('root')
);
// if (process.env.NODE_ENV !== 'production') {
//     const open = require('open');
//     open('http://localhost:4173');
//   }
  