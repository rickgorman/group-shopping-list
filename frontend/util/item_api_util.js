export const createItem = (item, basketId = 1) => {
  return $.ajax({
    method: 'post',
    url: `api/baskets/${basketId}/items`,
    data: {item}
  });
};

export const fetchItem = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/items/${id}`
  });
};

export const fetchItems = (basketId) => {
  return $.ajax({
    method: 'get',
    url: `api/baskets/${basketId}/items`
  });
};

export const updateItem = (item) => {
  return $.ajax({
    method: 'patch',
    url: `api/items/${item.id}`,
    data: {item}
  });
};

export const destroyItem = (item) => {
  return $.ajax({
    method: 'delete',
    url: `api/items/${item.id}`
  });
};

export const removeItem = (item, basketId = 1) => {
  return $.ajax({
    method: 'delete',
    url: `api/baskets/${basketId}/items/${item.id}`
  });
};
