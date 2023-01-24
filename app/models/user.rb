class User < ApplicationRecord
    has_many :cart_details
    has_many :reviews
    has_many :cart_items, through: :cart_details
    has_many :products, through: :reviews
end
