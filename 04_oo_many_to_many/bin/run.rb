# Useful for testing your code
require_relative '../lib/author.rb'
require_relative '../lib/genre.rb'
require_relative '../lib/book.rb'

require 'pry'


# I can declare variables here
gigi = Author.new("Gigi", 1)
eva = Author.new("Eva", 1)

technology = Genre.new("Technology")
pets = Genre.new("Pets")


gigi.write_book("Linters and Such", 123, technology)
gigi.write_book("&&", 1233, technology)
eva.write_book("Secret Life of Corgis", 456, pets)


# gigi_book1 = Book.new("Linters and Such", 123, gigi)
# gigi_book2 = Book.new("&&", 234, gigi)



binding.pry
0
