class AddUseridToBathrooms < ActiveRecord::Migration[5.1]
  def change
    add_reference :bathrooms, :user, foreign_key: true
  end
end
