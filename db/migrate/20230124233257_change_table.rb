class ChangeTable < ActiveRecord::Migration[6.1]
  def change
    change_table :products do |t|
      t.rename :image_address_inside_out_back, :image_address_insideout_back
      t.rename :quantity, :stock
    end
  end
end
