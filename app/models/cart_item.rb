class CartItem < ApplicationRecord
  belongs_to :cart_detail
  belongs_to :product
end
