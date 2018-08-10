# Author class

# name, age, books

class Author

  attr_reader :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def write_book(title, pages)
    # Create a new book here

    # title, pages, and author
    Book.new(title, pages, self)
  end

  def books
    # has many
    Book.all.select do |book|
      book.author == self
    end
  end
end
