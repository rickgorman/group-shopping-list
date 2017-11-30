class Basket < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :basket_items

  has_many :items,
    through: :basket_items

  # Returns an array of items grouped so as to show quantity. An array is used
  # in order to preserve ordering. Example:
  #   [ ['tomato', 3], ['head of lettuce', 1], ... ]
  def items_with_quantities
    self.items.group(:id).order(:created_at).count.to_a
  end
end
