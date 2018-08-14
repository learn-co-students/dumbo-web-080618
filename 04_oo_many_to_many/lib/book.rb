class Book
  attr_reader :title, :pages, :author, :genre

  # Book.all
  @@all = []

  # title, author, pages
  def initialize(title, pages, author, genre)
    @author = author
    @title = title
    @pages = pages
    @genre = genre

    @@all << self
  end

  def self.all
    @@all
  end
end
