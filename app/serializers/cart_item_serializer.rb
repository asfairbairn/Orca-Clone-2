class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :size
  has_one :cart_details
  has_one :product
end
