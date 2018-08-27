class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :author
      t.string :snippet
      t.string :title
    end
  end
end
