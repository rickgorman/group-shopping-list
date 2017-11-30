class AddUniquenessToItemsAndBaskets < ActiveRecord::Migration[5.1]
  def change
    add_index :items, :name, unique: true
    add_index :baskets, :name, unique: true
  end
end
