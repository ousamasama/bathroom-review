class AddsColumnToBathrooms < ActiveRecord::Migration[5.1]
  def change
    add_column :bathrooms, :lat, :float
    add_column :bathrooms, :lng, :float
  end
end
