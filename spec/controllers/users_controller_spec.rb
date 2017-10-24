require 'rails_helper'

RSpec.describe "API V1 Users", type: 'request' do
  describe 'DELETE /api/v1/admin/users' do
    context 'as an admin' do
      let(:user) {FactoryGirl.create(:user, id: 99)}
      let(:admin) {FactoryGirl.create(:user, role: "admin")}

      it 'deletes a user' do
        login_as(admin, :scope => :admin)
        expect { delete "/api/v1/admin/users/99.json" }.to change(User, :count).by(-1)
      end

      # it "creates a review with the correct attributes" do
      #   user = bathroom.user
      #   login_as(user, :scope => :user)
      #   post "/api/v1/reviews", params: valid_params
      #   expect(Review.last).to have_attributes valid_params[:review]
      # end
    end
  end
end
