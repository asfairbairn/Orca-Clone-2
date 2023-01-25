class Product < ApplicationRecord
  belongs_to :product_category
  belongs_to :customer_type
  
  has_many :cart_items
  has_many :cart_details, through: :cart_items
  has_many :reviews
end
