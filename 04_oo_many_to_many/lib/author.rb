# Author class

# name, age, books

class Author

  attr_reader :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def write_book(title, pages, genre)
    # Create a new book here

    # title, pages, and author
    Book.new(title, pages, self, genre)
  end

  # An author has many books
  def books
    # has many
    Book.all.select do |book|
      book.author == self
    end
  end


  # An author has many genres **through** books
  def genres
    # 1. Find all the books this author has written
    # implicit self - calls the method "books", when there isn't a variable by that name
    # books
    # explicit self - I'm explicitly calling a method
    self.books.map do |book|
      book.genre
    end


    # 2. Through all books, ask their genre
  end








end
