Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  root "bathrooms#index"
  resources :bathrooms, only: [:show]

  resources :bathrooms, only: [:show]

  namespace :api do
    namespace :v1 do
      resources :bathrooms, only: [:index, :show, :create]
      resources :users, only: [:index]
      resources :votes, only: [:create, :update]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
