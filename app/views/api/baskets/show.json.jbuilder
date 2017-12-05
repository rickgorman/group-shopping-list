json.extract! @basket, :id, :name

basket_item_ids_with_quantities = @basket.item_ids_with_quantities

json.basketItems do
  basket_item_ids_with_quantities.each do |item|
    json.set! item[:id] do
      json.merge! item
    end
  end
end

# return a hash of { ordering: id }
item_ordering = {}

basket_item_ids_with_quantities.map do |item|
  item_ordering[item[:ordering]] = item[:id]
end

json.itemOrdering item_ordering
