json.extract! @basket, :id, :name

json.ordered_items do
  json.array! @basket.item_ids_with_quantities
end
