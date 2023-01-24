class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_address_front, :image_address_back, :image_address_insideout_front, :image_address_inside_out_back, :brief_description, :description, :price, :quantity
  has_one :product_category
  has_one :customer_type
end
