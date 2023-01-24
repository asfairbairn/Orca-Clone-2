class ProductCategorySerializer < ActiveModel::Serializer
  attributes :id, :category_name, :category_description, :active
end
