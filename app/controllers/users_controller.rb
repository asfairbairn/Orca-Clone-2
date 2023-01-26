class UsersController < ApplicationController

    before_action :find_user, only: [:update, :destroy]
    skip_before_action :authorize, only: [:show, :create]

    def index
        render json: User.all
    end

    # def show
    #     user = User.find_by(id: session[:user_id])
    #     if user
    #         render json: user
    #     else
    #         render json: { error: "Not authorized" }, status: :unauthorized
    #     end
    # end

    def show
        render json: @current_user
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

    def user_params
        params.permit(:first_name, :last_name, :email, :street_address, :city, :state, :phone_number, :username, :password, :password_confirmation)
    end
end
