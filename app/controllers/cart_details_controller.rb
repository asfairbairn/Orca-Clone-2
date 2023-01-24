class CartDetailsController < ApplicationController

    before_action :find_cart_details, only: [:show]

    def show
        render json: @cart_details
    end

    def create
        cart_details = create!(cart_details_params)
        render json: cart_details, status: :created
    end

    private

    def find_cart_details
        @cart_details = CartDetail.find(params[:id])
    end

    def cart_details_params
        params.permit(:cart_details)
    end
end
