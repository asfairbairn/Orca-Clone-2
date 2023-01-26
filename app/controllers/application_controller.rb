class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_response
  before_action :authorize

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: {errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def not_found_response(exception)
    render json: { error: "#{exception.model} not found" }, status: :not_found
  end

  def invalid_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessble_entity
  end

end
