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
  avatar_url: Faker::Internet.url,
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
    avatar_url: Faker::Internet.url,
    username: Faker::Internet.user_name,
    role: "member"
  })
end
