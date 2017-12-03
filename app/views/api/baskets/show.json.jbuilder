json.extract! @basket, :id, :name

json.orderedItems do
  json.array! @basket.item_ids_with_quantities
end
