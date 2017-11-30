class Basket < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :basket_items

  has_many :items,
    through: :basket_items

  # Returns an array of objects grouped so as to show quantity. An array is used
  # to preserve ordering.
  def items_with_quantities
    ActiveRecord::Base.connection.execute(<<-SQL)
      SELECT
        items.id AS items_id,
        items.name AS items_name,
        COUNT(*) AS count_all
      FROM
        "basket_items"
      LEFT JOIN
        items ON items.id = basket_items.item_id
      WHERE
        "basket_items"."basket_id" = 1
      GROUP BY
        items.id,
        items.name
      ORDER BY
        MIN(basket_items.created_at);
SQL
  end
end
