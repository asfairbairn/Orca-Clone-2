class CartDetailSerializer < ActiveModel::Serializer
  attributes :id, :total
  has_one :user
  has_many :cart_items
end
