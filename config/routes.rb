Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "root#index"

  post   "/login" => "sessions#create"
  delete "/logout" => "sessions#destroy"
  get "/profile" => "users#profile"
  delete "/appointments" => "appointments#destroy"
  resources :users
  resources :uploads
  resources :appointments
end
