export const createItem = (item, basketId = 1) => {
  return $.ajax({
    method: 'post',
    url: `api/baskets/${basketId}/items`,
    data: {item}
  });
};
