FactoryGirl.define do
  factory :user do
    email 'test@example.com'
    password 'f4k3p455w0rd'
    username 'user_test'
  end
end

FactoryGirl.define do
  factory :review do
    body 'This is great!'
    rating 3
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
  end
end
