class AuthorsController < ApplicationController
  def index
    @authors = Author.all
    render :index
  end

  def new
    render :new
  end

  def create
    @author = Author.create(name: params["name"])

    # GET /authors/:id
    redirect_to("/authors/#{@author.id}")
    # byebug
  end

  def show
    # GET /authors/:id
    @author = Author.find(params[:id])
    render :show
  end

  def edit
    # GET /authors/:id/edit
    @author = Author.find(params[:id])
    render :edit
  end

  def update
    # PATCH /authors/:id
    @author = Author.find(params[:id])

    @author.update(name: params[:name])

    redirect_to("/authors/#{@author.id}")

    # byebug
  end

  def destroy
    # DELETE /authors/:id
    @author = Author.find(params[:id])
    @author.destroy

    redirect_to("/authors")
  end


  def kachow
    render :lightning_mcqueen
  end
end
