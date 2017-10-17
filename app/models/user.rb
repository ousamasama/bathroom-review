class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :bathrooms

  validates :username, presence: true
  validates :email, presence: true

   def admin?
     role == "admin"
   end
end
