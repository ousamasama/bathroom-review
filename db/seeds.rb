# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

admin = User.create!({
  email: Faker::Internet.email,
  password: Faker::Internet.password,
  city: Faker::Address.city_suffix,
  state: Faker::Address.state,
  encrypted_password: Faker::Internet.password,
  username: Faker::Internet.user_name,
  role: "admin"
  })

20.times do |n|
  User.create!({
    email: Faker::Internet.email,
    password: Faker::Internet.password,
    city: Faker::Address.city_suffix,
    state: Faker::Address.state,
    encrypted_password: Faker::Internet.password,
    username: Faker::Internet.user_name,
    role: "member"
  })
end

2.times do |b|
  Bathroom.create({
    address: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    zip: Faker::Address.zip,
    establishment: Faker::Pokemon.name,
    gender: "male",
    key_needed: "true",
    user_id: 1
    })
  end
  2.times do |b|
    Bathroom.create({
      address: Faker::Address.street_address,
      city: Faker::Address.city,
      state: Faker::Address.state,
      zip: Faker::Address.zip,
      establishment: Faker::Pokemon.name,
      gender: "female",
      key_needed: "false",
      user_id: 2
      })
    end
