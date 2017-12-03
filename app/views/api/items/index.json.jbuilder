@basket.items.each do |item|
  json.set! item[:id] do
    json.partial! 'api/items/show', item: item
  end
end
