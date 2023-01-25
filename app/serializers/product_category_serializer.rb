class ProductCategorySerializer < ActiveModel::Serializer
  attributes :id, :category_name, :category_description, :category_image, :active
end
