import { RECEIVE_BASKET_ERRORS } from '../actions/basket_actions';

const BasketErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BASKET_ERRORS:
      return [action.errors];

    default:
      return oldState;
  }
};

export default BasketErrorsReducer;
