# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

20.times do |n|
  User.create!({
    email: Faker::Internet.email,
    password: Faker::Internet.password,
    city: Faker::Pokemon.location,
    state: Faker::Address.state,
    encrypted_password: Faker::Internet.password,
    username: Faker::DragonBall.name,
    role: "member"
  })
end

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

Review.create(
  user_id: 1,
  bathroom_id: 1,
  rating: 1,
  body: "I couldn't find the light switch, so I went in the dark."
)

Review.create(
  user_id: 3,
  bathroom_id: 1,
  rating: 2,
  body: "It's on the first floor of the building."
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

Review.create(
  user_id: 2,
  bathroom_id: 3,
  rating: 3,
  body: "Worth the wait."
)

Review.create(
  user_id: 4,
  bathroom_id: 3,
  rating: 2,
  body: "Don't forget to get buzzed in."
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

Review.create(
  user_id: 5,
  bathroom_id: 4,
  rating: 2,
  body: "Dirty but fine."
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

Review.create(
  user_id: 6,
  bathroom_id: 5,
  rating: 1,
  body: "idk if this is worth the trouble"
)

Review.create(
  user_id: 7,
  bathroom_id: 5,
  rating: 1,
  body: "kinda scary"
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

Review.create(
  user_id: 8,
  bathroom_id: 6,
  rating: 2,
  body: "decent"
)

Review.create(
  user_id: 9,
  bathroom_id: 6,
  rating: 3,
  body: "pretty good"
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

Review.create(
  user_id: 10,
  bathroom_id: 8,
  rating: 1,
  body: "watch your steps because the tiles are coming off"
)

Review.create(
  user_id: 11,
  bathroom_id: 8,
  rating: 1,
  body: "I asked to get buzzed in but somebody stole it from me"
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

Review.create(
  user_id: 12,
  bathroom_id: 9,
  rating: 3,
  body: "The best bathroom I've ever been in."
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

Review.create(
  user_id: 13,
  bathroom_id: 10,
  rating: 1,
  body: "There's always somebody pooping."
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

Review.create(
  user_id: 14,
  bathroom_id: 11,
  rating: 3,
  body: "Always clean!"
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

Review.create(
  user_id: 15,
  bathroom_id: 12,
  rating: 3
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

Review.create(
  user_id: 16,
  bathroom_id: 15,
  rating: 2
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

Review.create(
  user_id: 17,
  bathroom_id: 16,
  rating: 3,
  body: "better than my food"
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

Review.create(
  user_id: 18,
  bathroom_id: 17,
  rating: 2,
  body: "it was okay"
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
