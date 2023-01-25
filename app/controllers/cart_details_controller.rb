class CartDetailsController < ApplicationController

    before_action :find_cart_details, only: [:show] 
    before_action :authorize 

    def show
        render json: @cart_details
    end

    def create
        cart_details = create!(user_id: session[:user_id])
        render json: cart_details, status: :created
    end

    private

    def find_cart_details
        @cart_details = CartDetail.find(params[:id])
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
