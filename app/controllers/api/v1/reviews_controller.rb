module Api
  module V1
    class ReviewsController < ApplicationController
      skip_before_action :verify_authenticity_token, only: [:create]
      def create
        binding.pry
      end

      private
      def review_params
        params.require(:review).permit(:bathroom_id, :rating, :body)
      end
    end
  end
end
