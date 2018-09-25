class UsersController < ApplicationController
# Creating a new user
  def new
    @user = User.new
  end

  def create
    # byebug

    @user = User.new(user_params)
    if @user.valid?
      @user.save
      flash[:notice] = "Successfully registered!"
      redirect_to repositories_path
    else
      # redirect_to "/signup"
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :email)
  end

end
