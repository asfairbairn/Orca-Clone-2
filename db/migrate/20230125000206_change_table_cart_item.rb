class ChangeTableCartItem < ActiveRecord::Migration[6.1]
  def change
    change_table :cart_items do |t|
      t.rename :cart_details_id, :cart_detail_id
    end
  end
end
