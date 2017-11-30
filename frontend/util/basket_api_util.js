export const fetchBasket = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/baskets/${id}`
  });
};

export const clearBasket = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/baskets/${id}/clear`
  });
};
