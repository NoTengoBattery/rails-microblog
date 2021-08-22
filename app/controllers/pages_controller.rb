# rubocop:disable Rails/ApplicationController

class PagesController < ActionController::Base
  layout "application"
  respond_to :html
  def index
  end
end

# rubocop:enable Rails/ApplicationController
