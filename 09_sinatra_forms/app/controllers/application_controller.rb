# ApplicationController
# =====================
#  - Represents the top-level controller for our application
#  - A controller will **inherit** from Sinatra::Base
class ApplicationController < Sinatra::Base

  # Since we are writing a non-standard Sinatra application
  # (a.k.a. we are writing it with folders and a modular pattern),
  # we need to say where the root is and where the app is supposed
  # to find its views.
  set :root, File.join(File.dirname(__FILE__), '..')
  set :views, File.join(root, "views")

  # Allows us to write a PATCH/DELETE request
  set :method_override, true

  # When a user goes to "/", I want to see "Hello World!"
  # The Request Method and the Request Path (route)
  # Request Methods: GET, POST, DELETE, PATCH, PUT
  get "/"  do # localhost:9393/
    "Hello World!"
  end

  # Books, I want to see a list of all books on my database
  # GET '/books' (REQUEST METHOD IS GET; REQUEST PATH IS '/books')
  # Index Action => "Get all of the a thing"
  get "/books" do
    @books = Book.all

    erb :index
    # 'views/index.erb'
  end

  # Edit Action => Reveals the edit form
  get "/books/:id/edit" do
    @book = Book.find(params[:id])
    erb :edit
  end


  # Update Action => Updates the database
  patch "/books/:id" do
    @book = Book.find(params[:id])


    @book.update(params["book"])
    # @book.update(author: params["author"], snippet: params["snippet"], title: params["title"])

    # binding.pry
    # @book.author = params["book"]["author"]
    # @book.snippet = params["book"]["snippet"]
    # @book.title = params["book"]["title"]

    # @book.save



    redirect to("/books/#{@book.id}")
    # binding.pry
  end



  # Create Action is really awesome at creating
  # a thing
  post '/books' do
    # binding.pry
    @book = Book.create(params["book"])
    redirect to("/books/#{@book.id}")
  end

  delete "/books/:id" do
    @book = Book.find(params[:id])

    @book.destroy

    redirect to("/books")
  end


  # New Action shows us the new form
  get "/books/new" do
    erb :new
  end

  # I want to find a particular book; find it by its id!
  # Show Action => "Show me a specific item (thing)"
  get "/books/:id" do
    # binding.pry
    @book = Book.find(params[:id])

    erb :show
    # 'views/show.erb'
  end





end
