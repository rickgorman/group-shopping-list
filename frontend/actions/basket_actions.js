export const RECEIVE_BASKET = "RECEIVE_BASKET";
export const CLEAR_BASKET = "CLEAR_BASKET";

export const receiveBasket = (basket) => {
  return {
    type: RECEIVE_BASKET,
    basket
  };
};

export const clearBasket = () => {
  return {
    type: CLEAR_BASKET
  };
};
