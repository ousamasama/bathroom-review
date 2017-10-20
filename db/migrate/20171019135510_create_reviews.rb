class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :bathroom, foreign_key: true
      t.integer :rating, null: false
      t.text :body
      t.string :photo_url

      t.timestamps
    end
  end
end
