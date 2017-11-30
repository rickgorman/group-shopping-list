class BasketItem < ApplicationRecord
  validates :basket_id, :item_id, presence: true

  belongs_to :basket
  belongs_to :item
end
