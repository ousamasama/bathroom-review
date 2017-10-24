class Api::V1::Admin::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_admin

  def index
    users = User.all
    render json: { status: 'SUCCESS', message: 'Loaded users.', users: users }, status: :ok
  end

  def destroy
    user = User.find(params[:id])

    if user.destroy
      render json: { status: 'SUCCESS', message: 'User deleted.' }
    else
      render json: { status: 'FAILURE', message: "User not deleted." }
    end
  end


  protected

  def authenticate_admin
    unless user_signed_in? && current_user.admin?
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end
end
