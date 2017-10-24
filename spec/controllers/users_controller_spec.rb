require 'rails_helper'

RSpec.describe "API V1 Users", type: 'request' do
  describe 'DELETE /api/v1/admin/users' do
    context 'as an admin' do
      let!(:user) {FactoryGirl.create(:user, id: 99)}
      let(:admin) {FactoryGirl.create(:user, role: "admin")}

      it 'deletes a user' do
        login_as(admin, scope: :user)

        expect { delete "/api/v1/admin/users/#{user.id}" , params: { id: user.id }}.to change(User, :count).by(-1)
      end


      it 'fails to delete a user if not an admin' do
        login_as(user, scope: :user)

        expect { delete "/api/v1/admin/users/#{user.id}" , params: { id: user.id }}.to change(User, :count).by(0)
      end


    end
  end
end
