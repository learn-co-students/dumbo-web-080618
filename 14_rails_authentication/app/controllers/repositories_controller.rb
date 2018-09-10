class RepositoriesController < ApplicationController

  def index

    if current_user
      # if logged in
      # see only your repos
      @repositories = current_user.repositories
    else
    # else
    # see ALL repos

      @repositories = Repository.all
    end
    render :index
  end
end
