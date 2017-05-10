import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { baseRoot } from './utils/const.js';
import App from './App';
import SingleRepo from './components/SingleRepo';
import reducer from './reducers';



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory,store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={`${baseRoot}`} component={App} />
    </Router> 
  </Provider>,
  document.getElementById('root')
);
