class Genre

  attr_reader :name

  def initialize(name)
    @name = name
  end


  # All the books in this genre
  def books
    Book.all.select do |book|
      # Is this book's genre object matching to "me"?
      book.genre == self
    end
  end

  # All of the authors that have written in this genre
  # Genre only knows about its authors **through** a book
  def authors
    # 1. Find all of the books in this genre
    # 2. Return back the author for every book
    books.collect do |book|
      # Each book, I want the author
      book.author
    end.uniq
  end







end
