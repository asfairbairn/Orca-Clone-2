class CartDetailSerializer < ActiveModel::Serializer
  attributes :id, :total
  has_one :user
end
