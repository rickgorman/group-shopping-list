import {
  RECEIVE_BASKET,
  CLEAR_BASKET
} from '../actions/basket_actions';

import {
  REMOVE_ITEM,
  RECEIVE_ITEM,
  DECREMENT_ITEM_IN_BASKET
} from '../actions/item_actions';

import merge from 'lodash/merge';

const BasketReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_BASKET:
      // discard old basket and replace with new basket
      // -- TODO: figure out how to sort by ordering
      return action.basket;

    case CLEAR_BASKET:
      // discard old basket
      return [];

    case REMOVE_ITEM:
      // remove items as they are deleted
      let { item } = action;

      let newState = merge({}, oldState);
      newState.basketItems = newState.basketItems.filter((el) => {
        return el.id !== item.id;
      });
      return newState;

    case DECREMENT_ITEM_IN_BASKET:
      item = action.item;
      newState = merge({}, oldState);

      newState.basketItems[item.id].quantity -= 1;

      // remove the item when quantity hits 0
      if(newState.basketItems[item.id].quantity === 0) {
        delete newState.basketItems[item.id];

        // rebuild the itemOrdering hash
        let newItemOrderingKeys = Object.keys(newState.itemOrdering)
          .filter(key => newState.itemOrdering[key] !== item.id);
        let newItemOrdering = {};
        newItemOrderingKeys.forEach(key => {
          newItemOrdering[key] = newState.itemOrdering[key];
        });

        newState.itemOrdering = newItemOrdering;
      }
      return newState;

    case RECEIVE_ITEM:
      // increment quantity of items held
      item = action.item;

      newState = merge({}, oldState);
      // increment existing item
      if(newState.basketItems[item.id]) {
        newState.basketItems[item.id].quantity += 1;
      } else {
        // add new item
        newState.basketItems[item.id] = {
          id: item.id,
          quantity: 1,
          ordering: Math.max(Object.keys(newState.itemOrdering)) + 1,
        };
      }
      return newState;

    default:
      return oldState;
  }
};

export default BasketReducer;
