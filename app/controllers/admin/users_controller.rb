class Admin::UsersController < ApplicationController

  def index
    unless user_signed_in? && current_user.admin?
      redirect_to '/'
    end
  end


end
