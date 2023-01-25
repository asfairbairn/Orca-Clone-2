# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_01_25_000206) do

  create_table "cart_details", force: :cascade do |t|
    t.integer "user_id", null: false
    t.float "total"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_cart_details_on_user_id"
  end

  create_table "cart_items", force: :cascade do |t|
    t.integer "cart_detail_id", null: false
    t.integer "product_id", null: false
    t.integer "quantity"
    t.string "size"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cart_detail_id"], name: "index_cart_items_on_cart_detail_id"
    t.index ["product_id"], name: "index_cart_items_on_product_id"
  end

  create_table "customer_types", force: :cascade do |t|
    t.string "category_name"
    t.string "category_description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "product_categories", force: :cascade do |t|
    t.string "category_name"
    t.string "category_description"
    t.boolean "active"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "category_image"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.integer "product_category_id", null: false
    t.string "image_address_front"
    t.string "image_address_back"
    t.string "image_address_insideout_front"
    t.string "image_address_insideout_back"
    t.string "brief_description"
    t.string "description"
    t.integer "price"
    t.integer "stock"
    t.integer "customer_type_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["customer_type_id"], name: "index_products_on_customer_type_id"
    t.index ["product_category_id"], name: "index_products_on_product_category_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "product_id", null: false
    t.integer "user_id", null: false
    t.integer "review"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["product_id"], name: "index_reviews_on_product_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.integer "phone_number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "zip"
  end

  add_foreign_key "cart_details", "users"
  add_foreign_key "cart_items", "cart_details"
  add_foreign_key "cart_items", "products"
  add_foreign_key "products", "customer_types"
  add_foreign_key "products", "product_categories"
  add_foreign_key "reviews", "products"
  add_foreign_key "reviews", "users"
end
