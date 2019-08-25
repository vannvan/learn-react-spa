import React from 'react'
import ReactDOM from 'react-dom'
import Router from '././router';
// import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'
require('./theme/index.scss')

ReactDOM.render(
  <Router/>,
  document.getElementById('root')
)
