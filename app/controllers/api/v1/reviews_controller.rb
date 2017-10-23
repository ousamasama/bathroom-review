module Api
  module V1
    class ReviewsController < ApplicationController
      skip_before_action :verify_authenticity_token, only: [:create]

      def create
        review = current_user.reviews.new(review_params)
        if review.save
          returned_review = {
            user_info: current_user,
            review_info: review,
            review_created_at: review.created_at.strftime('%-m/%d/%y')
          }
          render json: { status: 'SUCCESS', message: 'Added Review', review: returned_review }, status: :created
        else
          head :unprocessable_entity
        end
      end

      private
      def review_params
        params.require(:review).permit(:bathroom_id, :rating, :body)
      end
    end
  end
end
