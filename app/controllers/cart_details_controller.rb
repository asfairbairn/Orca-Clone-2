class CartDetailsController < ApplicationController

    before_action :find_cart_details, only: [:show]

    skip_before_action :authorize

    def show
        render json: @cart_details.cart_items
    end

    def create
        cart_details = CartDetail.create!(user_id: session[:user_id])
        render json: cart_details, status: :created
    end

    private

    def find_cart_details
        @cart_details = CartDetail.find(params[:id])
    end

end
