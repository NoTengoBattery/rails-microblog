module Users
  class SessionsController < Devise::SessionsController
    before_action :configure_sign_in_params, only: [:create]
    def create
      super
      true
    end

    private

    def configure_sign_in_params
      devise_parameter_sanitizer.permit(:sign_in, keys: %i[email username])
    end

    def respond_with(resource, opts = {})
      if resource.persisted?
        render "devise/sessions/create"
      else
        super(resource, opts)
      end
    end
  end
end
