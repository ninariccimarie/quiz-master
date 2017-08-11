Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :questions, only: [:index, :create, :show, :update, :destroy] do
        member do
          post :answers, to: 'questions#answer'
        end
      end
    end
  end
end
