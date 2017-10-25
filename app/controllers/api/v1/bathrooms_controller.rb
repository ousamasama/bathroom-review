module Api
  module V1
    class BathroomsController < ApplicationController
      skip_before_action :verify_authenticity_token, only: [:create]
      before_action :authenticate_bathroom_creator, only: [:destroy]

      def index
        if params[:query]
          bathrooms = Bathroom.where('establishment LIKE ?', "%#{params[:query].capitalize}%")

          render json: { status: 'SUCCESS', message: 'Loaded bathrooms', bathrooms: bathrooms }, status: :ok
          puts bathrooms
        else
          bathrooms = Bathroom.all
          render json: { status: 'SUCCESS', message: 'Loaded bathrooms', bathrooms: bathrooms }, status: :ok
        end
      end

      def show
        bathroom = Bathroom.find(params[:id])
        reviews = Review.where(bathroom: params[:id])
        parsed_reviews = reviews.map do |review|
          user = User.find(review.user_id)

          review = {
            user_info: user,
            review_info: review,
            review_votes: review.votes,
            review_created_at: review.created_at.strftime('%-m/%d/%y')
          }

        end
        render json: { status: 'SUCCESS', message: 'Loaded bathrooms', bathrooms: bathroom, reviews: parsed_reviews }, status: :ok
      end

      def create
        bathroom = current_user.bathrooms.new(bathroom_params)
        if bathroom.save
          head :created, location: api_v1_bathroom_url(bathroom)
        else
          head :unprocessable_entity
        end
      end

      def destroy
        bathroom = Bathroom.find(params[:id])

        if bathroom.destroy

          redirect_to root_url, status: 303
        else
          render json: { status: 'FAILURE', message: "Bathroom not deleted." }
        end
      end

      private
      def bathroom_params
        params.require(:bathroom).permit(:establishment, :address, :city, :state, :zip, :gender, :key_needed, :toilet_quantity)
      end
    end
  end
end
