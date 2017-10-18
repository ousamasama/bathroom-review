require 'rails_helper'

RSpec.describe User, type: :model do

  describe ".admin?" do
    it "checks if user/admin have admin privileges" do

      admin = User.create! do |u|
        u.role = "admin"
        u.email = "email@fake.com"
        u.password = "password"
        u.username = "admin_user"
      end

      user = User.create! do |u|
        u.role = "member"
        u.email = "email2@fake.com"
        u.password = "password"
        u.username = "member_user"
      end

      expect(user.admin?).to eq(false)
      expect(admin.admin?).to eq(true)
    end
  end
end
