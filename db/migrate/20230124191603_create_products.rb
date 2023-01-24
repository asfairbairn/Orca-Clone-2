class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.belongs_to :product_category, null: false, foreign_key: true
      t.string :image_address_front
      t.string :image_address_back
      t.string :image_address_insideout_front
      t.string :image_address_inside_out_back
      t.string :brief_description
      t.string :description
      t.integer :price
      t.integer :quantity
      t.belongs_to :customer_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
