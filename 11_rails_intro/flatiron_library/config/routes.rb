Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # To get all of the books
  get '/books', to: "books#index" # The Index Action
  get '/books/:id', to: "books#show" # Show Action
  #
  # get '/authors', to: 'authors#index' # Index Action
  # get '/authors/new', to: 'authors#new' # New Action
  # post '/authors', to: 'authors#create' # Create Action
  # get '/authors/:id', to: 'authors#show' # Show Action
  #
  # # How to edit
  # get '/authors/:id/edit', to: 'authors#edit' # Edit Action
  # patch '/authors/:id', to: 'authors#update' # Update Action
  #
  # delete '/authors/:id', to: 'authors#destroy' # Destroy action
  resources :authors

  # TO only show specific ones, only key and array of symbols
  # resources :authors, only: [:index, :show]

  get '/wowwwww', to: 'authors#kachow'
end
