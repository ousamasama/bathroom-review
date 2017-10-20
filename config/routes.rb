Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  root "bathrooms#index"

  namespace :api do
    namespace :v1 do
      resources :bathrooms, only: [:index, :show, :create] 
      resources :reviews, only: [:create]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
