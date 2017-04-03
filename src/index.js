import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import SingleRepo from './components/SingleRepo';
import Board from './components/Board';
import reducer from './reducers';



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory,store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} />
      <Route path='/board' component={Board} />
      <Route path='/repo/:repoId' component={SingleRepo} />
    </Router> 
  </Provider>,

  document.getElementById('root')
);
