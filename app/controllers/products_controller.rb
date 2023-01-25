class ProductsController < ApplicationController

    before_action :find_product, only: [:show, :update, :destroy]

    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: Product.all
    end

    def show
        render json: @product
    end

    def create
        product = Product.create!(product_params)
        render json: product, status: :created
    end

    def update
        @product.update!(product_params)
        render json: @product, status: :accepted
    end

    def destroy
        @product.destroy
        head :no_content
    end

    private

    def find_product
        @product = Product.find(params[:id])
    end

    def product_params
        params.permit(:name, :product_category_id, :image_address_front, :image_address_back, :image_address_insideout_front, :image_address_insideout_back, :brief_description, :description, :price, :stock, :customer_type_id)
    end
end
