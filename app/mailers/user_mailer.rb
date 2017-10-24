class UserMailer < ApplicationMailer
  default from: 'privy@example.com'

  def added_bathroom(user)
    @user = user
    @url = 'http://localhost:3000/users/sign_in'
    mail(to: @user.email, subject: "Welcome to Privy!")
  end
end
