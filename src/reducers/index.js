import { combineReducers } from 'redux';
import repos from './repos';
import { routerReducer } from 'react-router-redux';



export default combineReducers({
    routing: routerReducer,
    repos
});