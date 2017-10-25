require "rails_helper"

RSpec.describe Api::V1::BathroomsController, type: :controller do
  let!(:first_user) { User.create!(role: "member", email: "email@website.com", password: "password", username: "a_user") }
  let!(:query) { "Launch Academy" }
  let!(:mcdonalds) { Bathroom.create!(address: "329 Washington St", city: "Boston", state: "MA", zip: "02108", establishment: "McDonalds", gender: "men", key_needed: "false", toilet_quantity: 4, lat: 42.3554591, lng: -71.0613316, user: first_user) }

  let!(:first_bathroom) { FactoryGirl.create(:bathroom, establishment: "Turkey", lat: 40, lng: 40) }
  let!(:second_bathroom) { FactoryGirl.create(:bathroom, establishment: "Indian Ocean", lat: -40, lng: 40) }
  let!(:third_bathroom) { FactoryGirl.create(:bathroom, establishment: "South Atlantic", lat: -40, lng: -40) }
  let!(:fourth_bathroom) { FactoryGirl.create(:bathroom, establishment: "North Atlantic", lat: 40, lng: -40) }

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
        expect(response.headers['Location']).to eq api_v1_bathroom_url(Bathroom.last)
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
