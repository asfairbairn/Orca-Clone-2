require "csv"

CustomerType.destroy_all
User.destroy_all
ProductCategory.destroy_all
Product.destroy_all
Review.destroy_all

csv_text = File.read('./db/csv/CustomerType.csv')
csv = CSV.parse(csv_text, :headers => true, :header_converters => :symbol)
csv.each do |row|
    CustomerType.create!(row.to_hash)
end

csv_text = File.read('./db/csv/ProductCategories.csv')
csv = CSV.parse(csv_text, :headers => true, :header_converters => :symbol)
csv.each do |row|
    ProductCategory.create!(row.to_hash)
end

csv_text = File.read('./db/csv/Products.csv')
csv = CSV.parse(csv_text, :headers => true, :header_converters => :symbol)
csv.each do |row|
    Product.create!(row.to_hash)
end


csv_text = File.read('./db/csv/Users.csv')
csv = CSV.parse(csv_text, :headers => true, :header_converters => :symbol)
csv.each do |row|
    User.create!(row.to_hash)
end

csv_text = File.read('./db/csv/Reviews.csv')
csv = CSV.parse(csv_text, :headers => true, :header_converters => :symbol)
csv.each do |row|
    Review.create!(row.to_hash)
end

detail = CartDetail.create(user_id: 1)
detail2= CartDetail.create(user_id: 2)

cart = CartItem.create(product_id: 1, cart_detail: detail, quantity: 2, size: "Medium")
cart2 = CartItem.create(product_id: 3, cart_detail: detail, quantity: 1, size: "Small")
cart3 = CartItem.create(product_id: 3, cart_detail: detail2, quantity: 1, size: "Small")
