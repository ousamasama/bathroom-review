require 'rails_helper'

feature 'nav_bar in layouts/application.html.erb' do
  scenario "user signs in successfully" do
    visit '/'
    click_link 'Sign In'

    expect(page).to have_content 'Log in'

    current_user = User.create!( username: 'user_a', email: 'email@website.com', password: 'password')
    fill_in 'Email', with: current_user.email
    fill_in 'Password', with: current_user.password
    click_button 'Log in'

    expect(page).to have_content 'Signed in successfully.'
  end

  scenario "user tries to sign in with blank email and password" do
    visit '/users/sign_in'
    click_button 'Log in'

    expect(page).to have_content 'Invalid Email or password.'
  end

  scenario "user tries to sign in with an invalid password" do
    visit '/users/sign_in'

    current_user = User.create!( username: 'user_a', email: 'email@website.com', password: 'password')
    fill_in 'Email', with: current_user.email
    fill_in 'Password', with: "pass"
    click_button 'Log in'

    expect(page).to have_content 'Invalid Email or password.'
  end

  scenario "user signs up successfully" do
    current_user = User.new( username: 'user_a', email: 'email@website.com', password: 'password')
    visit '/users/sign_up'
    fill_in 'Username', with: current_user.username
    fill_in 'Email', with: current_user.email
    fill_in 'Password', with: current_user.password
    fill_in 'Password confirmation', with: current_user.password
    click_button 'Sign up'

    expect(page).to have_content 'Welcome! You have signed up successfully.'
    expect(page).to_not have_content 'Sign In'
    expect(page).to have_content 'Sign Out'
    # expect(ActionMailer::Base.deliveries.count).to eq(2)
  end

  scenario "user signs signs up with nothing" do
    current_user = User.new( username: 'user_a', email: 'email@website.com', password: 'password')
    visit '/users/sign_up'
    click_button 'Sign up'

    expect(page).to have_content 'Email can\'t be blank'
    expect(page).to have_content 'Password can\'t be blank'
    expect(page).to have_content 'Username can\'t be blank'
  end

  scenario "user signs up with short passwords that do not match" do
    current_user = User.new( username: 'user_a', email: 'email@website.com', password: 'prd')
    visit '/users/sign_up'
    fill_in 'Username', with: current_user.username
    fill_in 'Email', with: current_user.email
    fill_in 'Password', with: current_user.password
    fill_in 'Password confirmation', with: "current_user.password"
    click_button 'Sign up'

    expect(page).to have_content 'Password confirmation doesn\'t match Password'
    expect(page).to have_content 'Password is too short (minimum is 6 characters)'
  end

  scenario "user signs out" do
    user = FactoryGirl.create(:user, email: "emial3@website.com")
    login_as(user, :scope => :user)

    visit '/'
    click_link 'Sign Out'
    expect(page).to have_content 'Signed out successfully.'
    expect(page).to_not have_content 'Sign Out'
  end

end
