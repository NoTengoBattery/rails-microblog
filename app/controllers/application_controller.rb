class ApplicationController < ActionController::API
  before_action :authenticate_twixy!
  respond_to :json
end
