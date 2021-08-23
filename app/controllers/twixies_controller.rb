class TwixiesController < ApplicationController
  before_action :set_twixies, only: %i[show]

  def show
    super
    true
  end

  def following
    render :following, locals: {followings: current_twixy.followings.page(params[:page])}
  end

  def followers
    render :following, locals: {followings: current_twixy.followers.page(params[:page])}
  end
end
