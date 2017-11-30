class CreateBaskets < ActiveRecord::Migration[5.1]
  def change
    create_table :baskets do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
