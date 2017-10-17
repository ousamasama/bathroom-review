class Bathroom < ApplicationRecord

  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true
  validates :establishment, presence: true
  validates :gender, presence: true
  validates :toilet_quantity, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 20, allow_nil: true }
end
