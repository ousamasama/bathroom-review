class Api::V1::BathroomsController < ApplicationController
  
  def index
    bathrooms = Bathroom.all
    render json: { status: 'SUCCESS', message: 'Loaded bathrooms', bathrooms: bathrooms }, status: :ok
  end

  def show
    bathroom = Bathroom.find(params[:id])
    reviews = Review.where(bathroom: params[:id])
    parsed_reviews = reviews.map do |review|
      user = User.find(review.user_id)

      thing = {
        user_info: user,
        review_info: review,
        review_created_at: review.created_at.strftime('%-m/%d/%y')
      }
    end

    render json: { status: 'SUCCESS', message: 'Loaded bathrooms', bathrooms: bathroom, reviews: parsed_reviews }, status: :ok
  end
end
