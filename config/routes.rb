Rails.application.routes.draw do
  
  resources :reviews
  resources :cart_items
  resources :products
  resources :cart_details
  resources :users
  resources :customer_types
  resources :product_categories
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
