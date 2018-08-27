require_relative './spec_helper'

describe "Basic Routes" do
  describe "Index Action - GET '/books'" do
    it 'returns a status code of 200' do
      get '/books'
      expect(last_response.status).to eq(200)
    end

    it 'returns the index.erb' do
      get '/books'
      expect(last_response.body).to include("All Books")
    end

    it 'the template contains all books in the database' do
      @book = Book.last

      get '/books'
      expect(last_response.body).to include(@book.title)
    end
  end

  describe "Show Action - GET '/books/:id'" do

    it 'returns a status code of 200' do
      @book = Book.first
      get "/books/#{@book.id}"
      expect(last_response.status).to eq(200)
    end

    it 'returns the show.erb' do
      @book = Book.first
      get "/books/#{@book.id}"

      expect(last_response.body).to include("Book Details")
    end
  end

end
