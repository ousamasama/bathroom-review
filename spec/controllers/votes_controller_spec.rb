require 'rails_helper'

RSpec.describe Api::V1::VotesController, type: 'request' do
  describe "POST /api/v1/votes" do
    let(:user) { FactoryGirl.create(:user) }
    let(:bathroom) { FactoryGirl.create(:bathroom, user: user) }
    let(:review) { FactoryGirl.create(:review, user: user, bathroom: bathroom) }
    let(:params) do
      {
        vote: {
          user_id: user.id,
          review_id: review.id,
          vote: 1
        }
      }
    end

    it "creates a new vote" do
      login_as(user, :scope => :user)
      expect { post "/api/v1/votes", params: params }.to change(Vote, :count).by(+1)
      expect(response).to have_http_status :created
      expect(response.headers['Content-Type']).to eq 'application/json; charset=utf-8'
    end
  end

end
