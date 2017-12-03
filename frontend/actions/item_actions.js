import * as ApiUtil from '../util/item_api_util';

export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM_ERRORS = "RECEIVE_ITEM_ERRORS";
export const REMOVE_ITEM = "REMOVE_ITEM";

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

export const createItem = (item) => dispatch => {
  ApiUtil.createItem(item)
  .then((resItem) => {
    return dispatch(receiveItem(resItem));
  })
  .fail((errors) => {
    return dispatch(receiveItemErrors(errors.responseJSON));
  });
};

export const fetchItems = (basketId = 1) => dispatch => {
  ApiUtil.fetchItems(basketId)
  .then((resItems) => {
    return dispatch(receiveItems(resItems));
  })
  .fail((errors) => {
    return dispatch(receiveItemErrors(errors.statusText));
  });
};

export const updateItem = (item) => dispatch => {
  ApiUtil.updateItem(item)
  .then((resItem) => {
    return dispatch(receiveItem(resItem));
  })
  .fail((errors) => {
    return dispatch(receiveItemErrors(errors));
  });
};

export const destroyItem = (item) => dispatch => {
  ApiUtil.destroyItem(item)
  .then((resItem) => {
    return dispatch(removeItem(item));
  })
  .fail((errors) => {
    return dispatch(receiveItemErrors(errors.statusText));
  });
};
