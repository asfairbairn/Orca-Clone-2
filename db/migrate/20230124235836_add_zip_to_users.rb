class AddZipToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :zip, :integer
  end
end
