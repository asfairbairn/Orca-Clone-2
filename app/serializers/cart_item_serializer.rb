class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :size
  has_one :cart_detail
  has_one :product
end
