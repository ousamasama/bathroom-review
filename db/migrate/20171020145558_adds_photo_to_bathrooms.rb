class AddsPhotoToBathrooms < ActiveRecord::Migration[5.1]
  def change
    add_column :bathrooms, :bathroom_photo, :string
  end
end
