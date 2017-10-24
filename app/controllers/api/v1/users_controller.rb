class Api::V1::UsersController < ApplicationController

  def index
    if user_signed_in?
      render json: current_user
    else
      render json: { user: { id: nil } }
    end
  end
end
