class CreateProductCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :product_categories do |t|
      t.string :category_name
      t.string :category_description
      t.boolean :active

      t.timestamps
    end
  end
end
