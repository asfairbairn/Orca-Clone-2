Rails.application.routes.draw do
  
  resources :reviews, only: [:create, :show]
  resources :cart_items, only: [:create, :show, :update, :destroy]
  resources :products
  resources :cart_details, only: [:create, :show]
  resources :cart_items, only: [:create]
  resources :users
  resources :customer_types
  resources :product_categories

  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
