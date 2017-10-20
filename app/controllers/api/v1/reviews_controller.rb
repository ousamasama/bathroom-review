module Api
  module V1
    class ReviewsController < ApplicationController
      skip_before_action :verify_authenticity_token, only: [:create]

      def create
        review = current_user.reviews.new(review_params)
        if review.save
          return_review = {
            status: 200,
            review: review
          }.to_json
          render json: { status: 'SUCCESS', message: 'Added Review', review: return_review }, status: :ok
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
