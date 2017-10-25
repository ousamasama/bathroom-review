class BathroomSerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :zip, :establishment, :gender, :toilet_quantity

  belongs_to :user
end
