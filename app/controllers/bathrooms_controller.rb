class BathroomsController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def index
    @bathrooms = Bathroom.all
    if current_user
      @user = current_user.id
    else
      @user = nil
    end
  end

  def show
    @bathroom = Bathroom.find(params[:id])
  end

  protected

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

end
