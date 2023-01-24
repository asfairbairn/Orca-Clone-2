class CartItem < ApplicationRecord
  belongs_to :cart_details
  belongs_to :product
end
