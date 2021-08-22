Rails.application.routes.draw do
  scope :api, defaults: {format: :json} do
    scope :v1 do
      devise_for :twixies, controllers: {
        registrations: "users/registrations"
      }
    end
  end
  root "pages#index"
  get "*path", to: "pages#index", via: :all
end
