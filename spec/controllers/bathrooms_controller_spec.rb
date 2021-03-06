require "rails_helper"

RSpec.describe Api::V1::BathroomsController, vcr: true, type: :controller do
  let!(:first_user) { User.create!(role: "member", email: "email@website.com", password: "password", username: "a_user") }
  let!(:query) { "Launch Academy" }
  let!(:mcdonalds) { Bathroom.create!(address: "329 Washington St", city: "Boston", state: "MA", zip: "02108", establishment: "McDonalds", gender: "men", key_needed: "false", toilet_quantity: 4, lat: 42.3554591, lng: -71.0613316, user: first_user) }

  let!(:first_bathroom) { FactoryGirl.create(:bathroom, establishment: "Turkey", lat: 40, lng: 40) }

  describe "GET#index" do
    it "retrieves bathroom data" do
      get :index
      returned_json = JSON.parse(response.body)
      first = returned_json["bathrooms"][0]
      second = returned_json["bathrooms"][1]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(first["establishment"]).to eq "McDonalds"
      expect(second["establishment"]).to eq "Turkey"
    end
  end

  describe "search GET#index" do
    it "retrieves bathrooms sorted by distance from a location" do
      VCR.use_cassette("search", :record => :new_episodes) do
        response = Net::HTTP.get_response(URI("http://localhost:3000/api/v1/bathrooms/?query=#{query}"))
        returned_json = JSON.parse(response.body)
        first = returned_json["bathrooms"][0]
        second = returned_json["bathrooms"][1]

        expect(first["establishment"]).to eq "Starbucks"
        expect(second["establishment"]).to eq "South Station"
      end
    end
  end
end

RSpec.describe "API V1 Bathrooms", type: 'request' do
  describe "POST /api/v1/bathrooms" do
    context "with valid parameters" do

      let(:valid_params) do
        {
           bathroom: {
            establishment: "Fake Place",
            address: "123 Main St",
            city: "Cityton",
            state: "NY",
            zip: "11111",
            gender: "Unisex",
            key_needed: false,
            toilet_quantity: 1
          }
        }
      end

      it "creates a new bathroom" do
        user = FactoryGirl.create(:user)
        login_as(user, :scope => :user)
        expect { post "/api/v1/bathrooms", params: valid_params }.to change(Bathroom, :count).by(+1)
        expect(response).to have_http_status :created
        returned_json = JSON.parse(response.body)
        expect(returned_json['bathrooms']['establishment']).to eq "Fake Place"
      end

      it "creates a bathroom with the correct attributes" do
        user = FactoryGirl.create(:user)
        login_as(user, :scope => :user)
        post "/api/v1/bathrooms", params: valid_params
        expect(Bathroom.last).to have_attributes valid_params[:bathroom]
      end
    end
  end
end

RSpec.describe "API V1 Bathrooms", type: 'request' do
  describe "DELETE /api/v1/bathrooms" do
    let!(:user) {FactoryGirl.create(:user, id: 99)}
    let!(:user_2) {FactoryGirl.create(:user, id: 100)}
    let(:admin) {FactoryGirl.create(:user, role: "admin")}

    it "user deletes a bathroom" do
      bathroom = FactoryGirl.create(:bathroom, user: user)
      login_as(admin, scope: :user)
      expect { delete "/api/v1/bathrooms/#{bathroom.id}", params: { id: bathroom.id }}.to change(Bathroom, :count).by(-1)
    end

    it "user cannot delete a bathroom they did not create" do
      bathroom = FactoryGirl.create(:bathroom, user_id: 100)
      login_as(user, scope: :user)
      expect { delete "/api/v1/bathrooms/#{bathroom.id}", params: { id: bathroom.id }}.to change(Bathroom, :count).by(0)
    end
  end
end
