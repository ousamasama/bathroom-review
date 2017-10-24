class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :profile_photo])
    devise_parameter_sanitizer.permit(:account_update, keys: [:username, :profile_photo])
  end

  def authenticate_admin
    unless user_signed_in? && current_user.admin?
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def authenticate_bathroom_creator
    unless current_user.id == bathroom.id || current_user.admin?
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end


  def authenticate_review_creator
    unless current_user.id == review.id || current_user.admin?
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end
end
