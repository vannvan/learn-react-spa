// import React from 'react'
// import ReactDOM from 'react-dom'
// import Router from '././router';
// // import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'
// require('./theme/index.scss')
//
// ReactDOM.render(
//   <Router/>,
//   document.getElementById('root')
// )
import '@babel/polyfill';
import React from 'react';
import {render} from 'react-dom';
// import {Provider} from 'react-redux';
// import store from '@/store';
import App from './App';
import '@/theme/index.scss';


render(
    <App/>,
  document.getElementById('root')
)
