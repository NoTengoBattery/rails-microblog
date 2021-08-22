module Users
  class RegistrationsController < Devise::RegistrationsController
    before_action :configure_sign_up_params, only: [:create]
    def create
      super
      true
    end

    private

    def configure_sign_up_params
      devise_parameter_sanitizer.permit(:sign_up, keys: %i[full_name username])
    end

    def respond_with(resource, opts = {})
      if resource.persisted?
        render "devise/registrations/create"
      else
        super(resource, opts)
      end
    end
  end
end
