Rails.application.routes.draw do
  scope "/api" do
    resources :users, except: [:show]

    # resources :urls
  end
  # get '/about', to: 'users#index', as: 'patient'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
