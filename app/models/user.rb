class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  extend Devise::Models
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :bathrooms
  # has_many :bathrooms, dependent: :destroy
  has_many :reviews

  validates :username, presence: true
  validates :email, presence: true

  mount_uploader :profile_photo, ProfilePhotoUploader

   def admin?
     role == "admin"
   end
end
