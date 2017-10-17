Rails.application.routes.draw do
  root "bathrooms#index"
  namespace :api do
    namespace :v1 do
      resources :bathrooms, only: [:index]
    end
  end
end
