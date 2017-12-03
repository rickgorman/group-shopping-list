import { combineReducers } from 'redux';

import ItemErrorsReducer from './item_errors_reducer';
import BasketErrorsReducer from './basket_errors_reducer';

export default combineReducers({
  items: ItemErrorsReducer,
  basket: BasketErrorsReducer,
});
