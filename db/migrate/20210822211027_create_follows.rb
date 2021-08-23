class CreateFollows < ActiveRecord::Migration[6.1]
  def change
    create_table :follows do |t|
      t.belongs_to :follower, null: false
      t.belongs_to :followed, null: false

      t.timestamps
    end
  end
end
