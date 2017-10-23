require 'rails_helper'

RSpec.describe "API V1 Reviews", type: 'request' do
  describe 'POST /api/v1/reviews' do
    context 'with valid parameters' do
      user = FactoryGirl.create(:user, email: "email2@website.com")
      bathroom = FactoryGirl.create(:bathroom, user_id: user.id)
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
        login_as(user, :scope => :user)
        expect { post "/api/v1/reviews", params: valid_params }.to change(Review, :count).by(+1)
      end
    end
  end
end
