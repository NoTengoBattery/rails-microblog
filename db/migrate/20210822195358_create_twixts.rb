class CreateTwixts < ActiveRecord::Migration[6.1]
  def change
    create_table :twixts do |t|
      t.belongs_to :twixy, null: false, foreign_key: true
      t.string :text

      t.timestamps
    end
  end
end
