class Book < ActiveRecord::Base
  belongs_to :author
  # #<Book>.author => #<Author>
  # It finds it through the associated id
end
