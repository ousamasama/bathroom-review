FactoryGirl.define do
  factory :user do
    email {Faker::Internet.email}
    password {Faker::Internet.password}
    username {Faker::Internet.user_name}
    role "member"
  end
end

FactoryGirl.define do
  factory :bathroom do
    establishment "Fake Place"
    address "123 Main St"
    city "Cityton"
    state "NY"
    zip "11111"
    gender "Unisex"
    key_needed false
    toilet_quantity 1
    user
  end
end

FactoryGirl.define do
  factory :review do
    rating 2
    body {Faker::Pokemon.name}
    bathroom
    user
  end
end
