import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import Profile from './components/Profile';
// import Board from './components/Board';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';




const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,

  document.getElementById('root')
);
