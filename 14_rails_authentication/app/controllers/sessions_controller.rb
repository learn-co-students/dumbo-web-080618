class SessionsController < ApplicationController

  # Logging in
  def new
    # GET /login
    render :new
  end

  def create
    # POST /sessions
    # byebug

    @user = User.find_by(username: params["username"])

    if @user && @user.authenticate(params["password"])
      # We're logged in
      session[:current_user_id] = @user.id
      redirect_to repositories_path
    else
      render :new
      # redirect_to "/login"
    end
  end

  def destroy
    session.delete :current_user_id
    redirect_to "/login"
  end
end
