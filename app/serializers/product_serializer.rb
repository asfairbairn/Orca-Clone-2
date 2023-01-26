class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_address_front, :image_address_back, :image_address_insideout_front, :image_address_insideout_back, :brief_description, :description, :price, :stock
  
  has_one :product_category
  has_one :customer_type
end
