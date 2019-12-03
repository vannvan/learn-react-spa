import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/store'
import App from './App';

import '@/theme/index.scss';
const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
      <App />
  </Provider>,
  rootElement
)
