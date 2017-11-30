json.extract! @basket, :id, :name

json.ordered_items do
  json.array! @basket.items_with_quantities
end
