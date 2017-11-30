json.extract! @basket, :id, :name
json.items @basket.items_with_quantities
