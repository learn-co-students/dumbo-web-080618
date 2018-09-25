class BooksController < ApplicationController
  def index

    @books = Book.all

    render :index
    # Sinatra way => erb :index
  end

  def show
    # GET /books/:id
    @book = Book.find(params[:id])

    render :show
  end
end
