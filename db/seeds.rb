# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Bathroom.create(
  address: "61 Endicott St",
  city: "Norwood",
  state: "MA",
  zip: "02062",
  establishment: "Command Zone Games",
  gender: "Unisex",
  key_needed: "false",
  user_id: 1,
  toilet_quantity: 2
)

Bathroom.create(
  address: "700 Atlantic Ave",
  city: "Boston",
  state: "MA",
  zip: "02111",
  establishment: "South Station",
  gender: "Both",
  key_needed: "false",
  user_id: 1,
  toilet_quantity: 10
)

Bathroom.create(
  address: "101 Summer St",
  city: "Boston",
  state: "MA",
  zip: "02210",
  establishment: "Chipotle",
  gender: "Unisex",
  key_needed: "true",
  user_id: 1,
  toilet_quantity: 2
)

Bathroom.create(
  address: "160 Main St",
  city: "Milford",
  state: "MA",
  zip: "01757",
  establishment: "TJ's Collectibles",
  gender: "Unisex",
  key_needed: "false",
  user_id: 1,
  toilet_quantity: 1
)

Bathroom.create(
  address: "8 Market St,",
  city: "Warren",
  state: "RI",
  zip: "02885",
  establishment: "Allsport Collectibles",
  gender: "Unisex",
  key_needed: "false",
  user_id: 1,
  toilet_quantity: 1
)

Bathroom.create(
  address: "1423 Bedford St",
  city: "Abington",
  state: "MA",
  zip: "02351",
  establishment: "Battleground Games & Hobbies",
  gender: "Unisex",
  key_needed: "false",
  user_id: 1,
  toilet_quantity: 2
)

Bathroom.create(
  address: "125 Summer St",
  city: "Boston",
  state: "MA",
  zip: "02110",
  establishment: "Starbucks",
  gender: "Unisex",
  key_needed: "true",
  user_id: 1
)

Bathroom.create(
  address: "71 Summer St",
  city: "Boston",
  state: "MA",
  zip: "02110",
  establishment: "Wendy's",
  gender: "Unisex",
  key_needed: "true",
  user_id: 1,
  toilet_quantity: 1
)

Bathroom.create(
  address: "10 Summer St",
  city: "Boston",
  state: "MA",
  zip: "02110",
  establishment: "Caffe Nero",
  gender: "Both",
  key_needed: "true",
  user_id: 1,
  toilet_quantity: 2
)

Bathroom.create(
  address: "77 Summer St",
  city: "Boston",
  state: "MA",
  zip: "02111",
  establishment: "Launch Academy",
  gender: "Both",
  key_needed: "true",
  user_id: 1,
  toilet_quantity: 4
)

Bathroom.create(
  address: "902 Wimberly Drive SW",
  city: "Decatur",
  state: "AL",
  zip: "35603",
  establishment: "Starbucks",
  gender: "Both",
  key_needed: "false",
  user_id: 1,
  toilet_quantity: 2
)

Bathroom.create(
  address: "219 Tremont St",
  city: "Boston",
  state: "MA",
  zip: "02116",
  establishment: "Emerson Cutler Majestic Theatre",
  gender: "Both",
  key_needed: "false",
  user_id: 1,
  toilet_quantity: 10
)

Bathroom.create(
  address: "58 Summer St",
  city: "Boston",
  state: "MA",
  zip: "02110",
  establishment: "Five Guys",
  gender: "Both",
  key_needed: "true",
  user_id: 1,
  toilet_quantity: 2
)

Bathroom.create(
  address: "44 Gainsborough St",
  city: "Boston",
  state: "MA",
  zip: "02115",
  establishment: "Pavement Coffeehouse",
  gender: "Both",
  key_needed: "false",
  user_id: 1,
  toilet_quantity: 2
)

Bathroom.create(
  address: "242 County Rd",
  city: "Barrington",
  state: "RI",
  zip: "02806",
  establishment: "Shell",
  gender: "Both",
  key_needed: "false",
  user_id: 1,
  toilet_quantity: 2
)

Bathroom.create(
  address: "1415 Boston Providence Hwy",
  city: "Norwood",
  state: "MA",
  zip: "02062",
  establishment: "Chipotle",
  gender: "Both",
  key_needed: "true",
  user_id: 1,
  toilet_quantity: 2
)

Bathroom.create(
  address: "130 Providence Hwy",
  city: "Walpole",
  state: "MA",
  zip: "02032",
  establishment: "Panera Bread",
  gender: "Both",
  key_needed: "true",
  user_id: 1,
  toilet_quantity: 2
)



# 2.times do |b|
#   Bathroom.create({
#     address: Faker::Address.street_address,
#     city: Faker::Address.city,
#     state: Faker::Address.state,
#     zip: Faker::Address.zip,
#     establishment: Faker::Pokemon.name,
#     gender: "male",
#     key_needed: "true",
#     user_id: 1
#     })
#   end
# 2.times do |b|
#   Bathroom.create({
#     address: Faker::Address.street_address,
#     city: Faker::Address.city,
#     state: Faker::Address.state,
#     zip: Faker::Address.zip,
#     establishment: Faker::Pokemon.name,
#     gender: "female",
#     key_needed: "false",
#     user_id: 2
#     })
#   end

20.times do |n|
  User.create!({
    email: Faker::Internet.email,
    password: Faker::Internet.password,
    city: Faker::Address.city,
    state: Faker::Address.state,
    encrypted_password: Faker::Internet.password,
    username: Faker::Name.name,
    role: "member"
  })
end
