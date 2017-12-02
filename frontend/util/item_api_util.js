export const createItem = (item, basketId = 1) => {
  return $.ajax({
    method: 'post',
    url: `api/baskets/${basketId}/items`,
    data: {item}
  });
};

export const getItem = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/items/${id}`
  });
};

export const updateItem = (item) => {
  return $.ajax({
    method: 'patch',
    url: `api/items/${item.id}`,
    data: {item}
  });
};
