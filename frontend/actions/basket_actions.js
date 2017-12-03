import * as ApiUtil from '../util/basket_api_util';

export const RECEIVE_BASKET = "RECEIVE_BASKET";
export const CLEAR_BASKET = "CLEAR_BASKET";
export const RECEIVE_BASKET_ERRORS = "RECEIVE_BASKET_ERRORS";

const receiveBasket = (basket) => {
  return {
    type: RECEIVE_BASKET,
    basket
  };
};

const receiveBasketErrors = (errors) => {
  return {
    type: RECEIVE_BASKET_ERRORS,
    errors
  };
};

// here we give a default value of 1 for the 'main' basket
export const fetchBasket = (id = 1) => dispatch => {
  ApiUtil.fetchBasket(id)
  .then((basket) => {
    return dispatch(receiveBasket(basket));
  })
  .fail((errors) => {
    return dispatch(receiveBasketErrors(errors.statusText));
  });
};

export const clearBasket = (id = 1) => dispatch => {
  ApiUtil.clearBasket(id)
  .then((basket) => {
    return {
      type: CLEAR_BASKET
    };
  })
  .fail((errors) => {
    return dispatch(receiveBasketErrors(errors));
  });
};
