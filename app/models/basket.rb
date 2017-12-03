class Basket < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :basket_items,
    dependent: :delete_all

  has_many :items,
    through: :basket_items

  # Returns an array of objects grouped so as to show quantity. An array is used
  # to preserve ordering.
  def item_ids_with_quantities
    rows = ActiveRecord::Base.connection.execute(<<-SQL)
      SELECT
        items.id AS items_id,
        COUNT(*) AS count_all
      FROM
        "basket_items"
      LEFT JOIN
        items ON items.id = basket_items.item_id
      WHERE
        "basket_items"."basket_id" = 1
      GROUP BY
        items.id
      ORDER BY
        MIN(basket_items.created_at);
SQL

    # clean up the results to align as JSON
    rows.map do |row|
      {
        id: row["items_id"],
        quantity: row["count_all"]
      }
    end
  end
end
