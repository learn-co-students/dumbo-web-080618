class Book
  attr_reader :title, :pages, :author

  # Book.all
  @@all = []

  # title, author, pages
  def initialize(title, pages, author)
    @author = author
    @title = title
    @pages = pages

    @@all << self
  end

  def self.all
    @@all
  end
end
