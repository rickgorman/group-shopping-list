import {
  RECEIVE_BASKET,
  CLEAR_BASKET
} from '../actions/basket_actions';

import {
  REMOVE_ITEM
} from '../actions/item_actions';

import merge from 'lodash/merge';

const BasketReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_BASKET:
      // discard old basket and replace with new basket
      return action.basket;

    case CLEAR_BASKET:
      // discard old basket
      return [];

    case REMOVE_ITEM:
      // remove items as they are deleted
      const { item } = action;

      let newState = merge({}, oldState);
      newState.orderedItems = newState.orderedItems.filter((el) => {
        return el.id !== item.id;
      });
      return newState;

    default:
      return oldState;
  }
};

export default BasketReducer;
