Rails.application.routes.draw do
  get 'users/index'
  root :to => 'home#index'
  get 'home/index'
  devise_for :users, :controllers => { :registrations => 'registrations'}
  devise_scope :user do
    get '/login' => 'devise/sessions#new'
    get '/logout' => 'devise/sessions#detroy'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
