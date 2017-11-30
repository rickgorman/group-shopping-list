class AddUniquenessToItemsAndBaskets < ActiveRecord::Migration[5.1]
  def change
    remove_index :items, :name
    add_index :items, :name, unique: true

    remove_index :baskets, :name
    add_index :baskets, :name, unique: true
  end
end
