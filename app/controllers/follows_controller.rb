class FollowsController < ApplicationController
  def create
    user = Twixy.find_by(username: follow_params[:username])
    @follow = Follow.create({follower: current_twixy, followed: user})
    if @follow.persisted?
      head :no_content
    else
      head :unprocessable_entity
    end
  end

  def unfollow
    user = Twixy.find_by(username: follow_params[:username])
    @follow = Follow.find_by(follower: current_twixy, followed: user)
    @follow&.destroy
  end

  private

  def follow_params
    params.require(:follow).permit(:username)
  end
end
