class Basket < ApplicationRecord
  validates :name, presence: true

  has_many :basket_items

  has_many :items,
    through: :basket_items
end
