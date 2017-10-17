class CreateBathrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :bathrooms do |t|
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :establishment, null: false
      t.string :gender, null: false
      t.boolean :key_needed, default: false
      t.integer :toilet_quantity

      t.timestamps
    end
    add_index :bathrooms, [:address, :establishment, :city], unique: true
  end
end
