module Api
  module V1
    class BathroomsController < ApplicationController
      def index
        bathrooms = Bathroom.all
        render json: { status: 'SUCCESS', message: 'Loaded bathrooms', bathrooms: bathrooms }, status: :ok
      end

      def show
        bathroom = Bathroom.find(params[:id])
        render json: { status: 'SUCCESS', message: 'Loaded bathrooms', bathrooms: bathroom }, status: :ok
      end
    end
  end
end
