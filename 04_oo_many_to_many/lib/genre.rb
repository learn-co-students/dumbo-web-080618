class Genre

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def books
    Book.all.select do |book|
      # Is this book's genre object matching to "me"?
      book.genre == self
    end
  end

  def authors
    self.books.map do |book|
      book.author
    end.uniq
  end


end
