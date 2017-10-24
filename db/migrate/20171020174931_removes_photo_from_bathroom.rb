class RemovesPhotoFromBathroom < ActiveRecord::Migration[5.1]
  def change
    remove_column :bathrooms, :bathroom_photo
  end
end
