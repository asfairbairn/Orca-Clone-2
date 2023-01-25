class AddCategoryImageToProductCategories < ActiveRecord::Migration[6.1]
  def change
    add_column :product_categories, :category_image, :string
  end
end
