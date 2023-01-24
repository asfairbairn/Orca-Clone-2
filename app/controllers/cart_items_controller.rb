class CartItemsController < ApplicationController

    before_action :find_cart_item, only: [:show]

    def show
        render json: @cart_item
    end

    def create
        cart_item = create!(cart_item_params)
        render json: cart_item, status: :created
    end

    private

    def find_cart_item
        @cart_item = CartItem.find(params[:id])
    end

    def cart_item_params
        params.permit(:cart_item)
    end
end
