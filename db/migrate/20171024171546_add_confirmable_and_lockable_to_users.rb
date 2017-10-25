class AddConfirmableAndLockableToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :confirmable_token, :string
    add_column :users, :confirmed_at, :datetime
    add_column :users, :confirmation_sent_at, :string
    add_column :users, :unlock_token, :string
  end
end
