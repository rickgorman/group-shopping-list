Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :baskets, only: [:create, :index, :show, :update, :destroy] do
      resources :items, only: [:create, :index]
    end

    resources :items, only: [:show, :update, :destroy]
  end

end
