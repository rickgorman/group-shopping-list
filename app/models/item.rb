class Item < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :basket_items,
    dependent: :delete_all

end
