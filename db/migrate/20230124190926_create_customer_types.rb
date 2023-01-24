class CreateCustomerTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :customer_types do |t|
      t.string :category_name
      t.string :category_description

      t.timestamps
    end
  end
end
