class CreateRepositories < ActiveRecord::Migration[5.2]
  def change
    create_table :repositories do |t|
      t.string :name
      t.integer :stars
      t.integer :user_id

      t.timestamps
    end
  end
end
