class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :user_id

  belongs_to :user
end
