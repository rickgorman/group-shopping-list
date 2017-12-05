import * as ApiUtil from '../util/item_api_util';

export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM_ERRORS = "RECEIVE_ITEM_ERRORS";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const DECREMENT_ITEM_IN_BASKET = "DECREMENT_ITEM_IN_BASKET";

const receiveItem = (item) => {
  return {
    type: RECEIVE_ITEM,
    item
  };
};

const receiveItems = (items) => {
  return {
    type: RECEIVE_ITEMS,
    items
  };
};

const receiveItemErrors = (errors) => {
  return {
    type: RECEIVE_ITEM_ERRORS,
    errors
  };
};

const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    item
  };
};

const decrementItemInBasket = (item, basketId = 1) => {
  return {
    type: DECREMENT_ITEM_IN_BASKET,
    item,
    basketId
  };
};

export const createItem = (item) => (dispatch) => {
  return ApiUtil.createItem(item)
    .then((resItem) => {
      return dispatch(receiveItem(resItem));
    })
    .fail((errors) => {
      return dispatch(receiveItemErrors(errors.responseJSON));
    });
};

export const fetchItems = (basketId = 1) => (dispatch) => {
  return ApiUtil.fetchItems(basketId)
    .then((resItems) => {
      return dispatch(receiveItems(resItems));
    })
    .fail((errors) => {
      return dispatch(receiveItemErrors(errors.statusText));
    });
};

export const updateItem = (item) => (dispatch) => {
  return ApiUtil.updateItem(item)
    .then((resItem) => {
      return dispatch(receiveItem(resItem));
    })
    .fail((errors) => {
      return dispatch(receiveItemErrors(errors));
    });
};

export const destroyItem = (item) => (dispatch) => {
  return ApiUtil.destroyItem(item)
    .then((resItem) => {
      return dispatch(removeItem(item));
    })
    .fail((errors) => {
      return dispatch(receiveItemErrors(errors.statusText));
    });
};

export const destroyItemInBasket = (item) => (dispatch) => {
  return ApiUtil.removeItem(item)
    .then((resItem) => {
      return dispatch(decrementItemInBasket(item));
    });
};
