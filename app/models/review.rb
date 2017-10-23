class Review < ApplicationRecord
  belongs_to :user
  belongs_to :bathroom
  has_many :votes

  validates :rating, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 3 }
  validates :body, length: { maximum: 500 }
end
