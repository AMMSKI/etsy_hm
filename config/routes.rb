Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get 'things', to: 'things#index'
    get 'products', to: 'products#index'
    get 'products/sellers', to: 'products#sellers'
    get 'categories', to: 'products#categories'
    get 'categories/prices', to: 'products#category_prices'
    get 'products/:id', to: 'products#products_by_seller'
    get 'sellers/chart_by_category', to: 'sellers#category_by_seller'
  end
end
