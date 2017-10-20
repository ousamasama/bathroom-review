require "rails_helper"

RSpec.describe Api::V1::BathroomsController, type: :controller do
  let!(:first_user) { User.create!(role: "member", email: "email@website.com", password: "password", username: "a_user") }

  let!(:mcdonalds) { Bathroom.create!(address: "123 Fake St.", city: "Boston", state: "MA", zip: 12111, establishment: "McDonalds", gender: "men", key_needed: "false", toilet_quantity: 4, user: first_user) }

  describe "GET#index" do
    it "retrieves bathroom data" do
      get :index
      returned_json = JSON.parse(response.body)
      first = returned_json["bathrooms"][0]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(first["establishment"]).to eq "McDonalds"
    end
  end

  describe "POST#bathrooms" do
    let!(:bath) {{
      establishment: "Starbucks",
      address: "1 Main St",
      city: "Boston",
      state: "MA",
      zip: "02111",
      gender: "Unisex",
      key_needed: false,
      toilet_quantity: 1
    }}
    let!(:params) { {bathroom: bath} }
    it "recieves bathroom data and creates a new bathroom" do
      post :create, params: params

      bathroom = Bathroom.last
      expect(bathroom.establishment).to eq "Starbucks"
      # expect(response.status).to eq 200
      # expect(response.content_type).to eq("application/json")
    end
  end
end
