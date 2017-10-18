class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :username, :string, null: false
    add_column :users, :avatar_url, :string
    add_column :users, :city, :string
  end
end
