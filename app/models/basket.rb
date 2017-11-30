class Basket < ApplicationRecord
  validates :name, presence: true

  has_many :basket_items

  has_many :items,
    through: :basket_items

  # returns a hash of items grouped so as to show quantity.
  #   example: { 'tomato' => 3, 'head of lettuce' => 1 }
  def items_with_quantities
    self.items.group(:name).order(:created_at).count
  end
end
