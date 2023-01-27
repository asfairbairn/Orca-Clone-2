class UsersController < ApplicationController

    before_action :find_user, only: [:update, :destroy]
    before_action :guest, only: [:show]
    skip_before_action :authorize, only: [:show, :create]

    def index
        render json: User.all
    end

    def show
        authorize
        render json: @current_user
    end

    def guest
        return if session[:user_id]
        @guest = User.new(:email => "Guest")
        @guest.save(validate: false)
        session[:user_id] = @guest.id
        cart_details = @guest.cart_details.create!
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end


    def update
        @user.update!(user_params)
        render json: @user, status: :accepted
    end

    def destroy
        @user.destroy
        head :no_content
    end

    private

    def find_user
        @user = User.find(params[:id])
    end

    # def guest_user
    #     @guest = User.new(:email => "Guest" )
    #     @guest.save(:validate => false)
    #     CartDetails.create(user_id: guest.id)
    # end

    def user_params
        params.permit(:first_name, :last_name, :email, :street_address, :city, :state, :phone_number, :username, :password, :password_confirmation)
    end
end
