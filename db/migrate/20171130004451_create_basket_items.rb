class CreateBasketItems < ActiveRecord::Migration[5.1]
  def change
    create_table :basket_items do |t|
      t.integer :basket_id, null: false
      t.integer :item_id, null: false

      t.timestamps
    end
    
    add_index :basket_items, :basket_id
    add_index :basket_items, :item_id
  end
end
