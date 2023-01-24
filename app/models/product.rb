class Product < ApplicationRecord
  belongs_to :product_category
  belongs_to :customer_type
end
