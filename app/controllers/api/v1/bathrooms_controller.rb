module Api
  module V1
    class BathroomsController < ApplicationController
      skip_before_action :verify_authenticity_token, only: [:create]
      before_action :authenticate_bathroom_creator, only: [:destroy]

      def index
        location = Geokit::Geocoders::GoogleGeocoder.geocode(params[:query])
        if location.success
          bathroomsJSON = []
          bathrooms = Bathroom.by_distance(origin: location).limit(5)
          bathrooms.each do |bathroom|
            distance = bathroom.distance_to(location)
            distance = distance.round(1)
            review_total = 0
            bathroom.reviews.each do |review|
              review_total += review.rating
            end
            review_average = 0
            if bathroom.reviews.count != 0
              review_average = review_total / bathroom.reviews.count
            end
            bathroom_item = {
              id: bathroom.id,
              establishment: bathroom.establishment,
              address: bathroom.address,
              city: bathroom.city,
              state: bathroom.state,
              distance: distance,
              review_average: review_average,
              review_total: bathroom.reviews.count
            }
            bathroomsJSON << bathroom_item
          end
          render json: { status: 'SUCCESS', message: 'Loaded bathrooms', bathrooms: bathroomsJSON }, status: :ok
          puts bathrooms
        else
          bathroomsJSON = []
          bathrooms = Bathroom.all.limit(5)
          bathrooms.each do |bathroom|
            review_total = 0
            bathroom.reviews.each do |review|
              review_total += review.rating
            end
            review_average = 0
            if bathroom.reviews.count != 0
              review_average = review_total / bathroom.reviews.count
            end

            bathroom_item = {
              id: bathroom.id,
              establishment: bathroom.establishment,
              address: bathroom.address,
              review_average: review_average,
              review_total: bathroom.reviews.count
            }

            bathroomsJSON << bathroom_item
          end
          render json: { status: 'SUCCESS', message: 'Loaded bathrooms', bathrooms: bathroomsJSON }, status: :ok
        end
      end

      def show
        bathroom = Bathroom.find(params[:id])
        reviews = Review.where(bathroom: params[:id])
        total_ratings = 0
        reviews.each do |review|
          total_ratings += review.rating
        end

        if bathroom.reviews.count != 0
          average = total_ratings.to_f / bathroom.reviews.count.to_f
          rounded_average = average.round(1)
        end

        parsed_reviews = reviews.map do |review|
          user = User.find(review.user_id)

          review = {
            user_info: user,
            review_info: review,
            review_votes: review.votes,
            review_created_at: review.created_at.strftime('%-m/%d/%y')
          }

        end
        render json: { status: 'SUCCESS', message: 'Loaded bathrooms', bathrooms: bathroom, reviews: parsed_reviews, review_average: rounded_average }, status: :ok
      end

      def create
        bathroom = current_user.bathrooms.new(bathroom_params)
        location = Geokit::Geocoders::GoogleGeocoder.geocode("#{bathroom.address}, #{bathroom.city}, #{bathroom.state} #{bathroom.zip}")
        bathroom.lat = location.lat
        bathroom.lng = location.lng
        if bathroom.save
          render json: { status: 'SUCCESS', bathrooms: bathroom }, status: :created
        else
          head :unprocessable_entity
        end
      end

      def destroy
        bathroom = Bathroom.find(params[:id])

        if bathroom.destroy
          render json: { status: 'SUCCESS', message: 'Bathroom deleted.' }
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
