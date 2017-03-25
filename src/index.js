import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Profile from './components/Profile';
import Board from './components/Board';



const router = (
  <Router  history={browserHistory}>
    <Route path ='/' component ={App}></Route>
    <Route path='board' component={Board}></Route>
  </Router>

)

ReactDOM.render(
  router,
  document.getElementById('root')
);
