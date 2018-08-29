class RenameAuthorColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :books, :author, :author_id
    change_column :books, :author_id, :integer
  end
end
