# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

###########
# Baskets #
###########

Basket.destroy_all

main = Basket.create(
  name: "main"
)

#########
# Items #
#########

Item.destroy_all

lettuce = Item.create(
  name: "head of lettuce"
)

tomato = Item.create(
  name: "tomato"
)

ranch_dressing = Item.create(
  name: "ranch dressing"
)

###############
# BasketItems #
###############

BasketItem.destroy_all

bi1 = BasketItem.create(
  basket_id: main.id,
  item_id: lettuce.id
)
bi2 = BasketItem.create(
  basket_id: main.id,
  item_id: tomato.id
)
bi3 = BasketItem.create(
  basket_id: main.id,
  item_id: ranch_dressing.id
)
bi4 = BasketItem.create(
  basket_id: main.id,
  item_id: tomato.id
)
bi5 = BasketItem.create(
  basket_id: main.id,
  item_id: tomato.id
)
