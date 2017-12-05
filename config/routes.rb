Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :baskets,
      only: [
        :create,
        :index,
        :show,
        :update,
        :destroy
      ] do
      resources :items, only: [:create, :index, :destroy]
    end

    resources :items, only: [:show, :update, :destroy]
  end

end
