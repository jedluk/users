import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import AppRouter from './app/router/AppRouter';
import style from "../src/app/styles/style.css";
import img from '../src/app/styles/img/login.jpg';
import rootReducer from './reducers';

const middleware = applyMiddleware(logger);  
const store = createStore(rootReducer, middleware)

ReactDOM.render(
  <Provider store={store} >
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);