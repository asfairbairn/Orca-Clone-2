class CustomerTypesController < ApplicationController

    before_action :find_customer_type, only: [:show, :update, :destroy]

    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: CustomerType.all
    end

    def show
        render json: @customer_type
    end

    def create
        customer_type = CustomerType.create!(customer_type_params)
        render json: customer_type, status: :created
    end

    def update
        @customer_type.update!(customer_type_params)
        render json: @customer_type, status: :accepted
    end

    def destroy
        @customer_type.destroy
        head :no_content
    end

    private

    def find_customer_type
        @customer_type = CustomerType.find(params[:id])
    end

    def customer_type_params
        params.permit(:category_name, :category_description)
    end
end
