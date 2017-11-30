@basket.items_with_quantities.each do |item|
  json.set! item[:id] do
    json.partial! 'api/items/show', item: item
    json.quantity item[:quantity]
  end
end
