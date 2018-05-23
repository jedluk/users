import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import AppRouter from './app/AppRouter';
// import rootReducer from './reducers';

// I've added logger just to show that we can use middleware here
// const middleware = applyMiddleware(logger);  
// const store = createStore(rootReducer, middleware)

ReactDOM.render(
  /*
  <Provider store={store} />
  </Provider>
  */
  <AppRouter />,
  document.getElementById('root')
);