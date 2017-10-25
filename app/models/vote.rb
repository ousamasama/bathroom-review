class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :review

  validates :vote, numericality: { only_integer: true, less_than_or_equal_to: 1, greater_than_or_equal_to: -1 }
end
