import { combineReducers } from 'redux';
//import ErrorsReducer from './errors_reducer';
import BasketReducer from './basket_reducer';

export default combineReducers({
  basket: BasketReducer
});