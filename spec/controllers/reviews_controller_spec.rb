require 'rails_helper'

RSpec.describe "API V1 Reviews", type: 'request' do
  describe 'POST /api/v1/reviews' do
    context 'with valid parameters' do
      let(:bathroom) {FactoryGirl.create(:bathroom)}
      let(:valid_params) do
        {
          review: {
            rating: 2,
            body: "it was great",
            bathroom_id: bathroom.id
          }
        }
      end

      it 'creates a new Review' do
        user = bathroom.user
        login_as(user, :scope => :user)
        expect { post "/api/v1/reviews", params: valid_params }.to change(Review, :count).by(+1)
        expect(response).to have_http_status :created
      end

      it "creates a review with the correct attributes" do
        user = bathroom.user
        login_as(user, :scope => :user)
        post "/api/v1/reviews", params: valid_params
        expect(Review.last).to have_attributes valid_params[:review]
      end
    end
  end
end
