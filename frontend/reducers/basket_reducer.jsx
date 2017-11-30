import {
  RECEIVE_BASKET,
  CLEAR_BASKET
} from '../actions/basket_actions';

const BasketReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_BASKET:
      // discard old basket and replace with new basket
      return action.basket;

    case CLEAR_BASKET:
      // discard old basket
      return [];

    default:
      return oldState;
  }
};

export default BasketReducer;
