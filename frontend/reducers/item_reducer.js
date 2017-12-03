import {
  RECEIVE_ITEM,
  RECEIVE_ITEMS,
  REMOVE_ITEM
} from '../actions/item_actions';
import merge from 'lodash/merge';

const ItemReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ITEM:
      // simple merge
      const { item } = action;
      return merge({}, oldState, { [item.id]: item } );

    case RECEIVE_ITEMS:
      // simple merge
      const { items } = action;
      return merge({}, oldState, items);

    case REMOVE_ITEM:
      // simple delete
      const newState = merge({}, oldState);
      delete newState[action.item.id];
      return newState;

    default:
      return oldState;
  }
};

export default ItemReducer;
