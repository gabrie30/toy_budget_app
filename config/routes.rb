Rails.application.routes.draw do
  root to: "static_pages#index"

  namespace :api, defaults: { format: 'json' } do
    resources :items
    resources :totals, only: [:index]
    resources :budgets, only: [:index, :create]
  end

end
