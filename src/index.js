import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import AppRouter from './app/router/AppRouter';
import rootReducer from './reducers';

import './app/styles/style.css';
// Boostrap imported via CDN

const middleware = applyMiddleware(logger);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
