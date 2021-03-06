import { combineReducers } from 'redux';
//import ErrorsReducer from './errors_reducer';
import BasketReducer from './basket_reducer';
import ItemReducer from './item_reducer';
import ErrorsReducer from './errors_reducer';

export default combineReducers({
  basket: BasketReducer,
  items: ItemReducer,
  errors: ErrorsReducer,
});
