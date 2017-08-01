Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :questions, only: [:index, :create, :show, :update, :destroy] do
      member do
        get :answers
      end
    end
  end
end
