Rails.application.routes.draw do
  scope :api, defaults: {format: :json} do
    scope :v1 do
      devise_for :twixies, controllers: {
        registrations: "users/registrations",
        sessions: "users/sessions"
      }
      resource :twixt, only: %i[create]
      resource :follows, only: %i[create]
      patch "/follows", action: :unfollow, controller: :follows
      get "/following", action: :following, controller: :twixies
      get "/followers", action: :followers, controller: :twixies
    end
  end
  root "pages#index"
  get "*path", to: "pages#index", via: :all
end
