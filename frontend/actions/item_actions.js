export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const DESTROY_ITEM = "DESTROY_ITEM";

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

export const createItem = (item) => {
  // ajax
  return {
    type: RECEIVE_ITEM,
    item
  };
};

export const updateItem = (item) => {
  // ajax
  return {
    type: RECEIVE_ITEM,
    item
  };
};

export const destroyItem = (item) => {
  // ajax
  return {
    type: DESTROY_ITEM,
    item
  };
};
