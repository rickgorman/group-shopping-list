import { RECEIVE_ITEM_ERRORS } from '../actions/item_actions';

const ItemErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ITEM_ERRORS:
      return [action.errors];

    default:
      return oldState;
  }
};

export default ItemErrorsReducer;
