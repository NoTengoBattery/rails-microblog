class TwixtsController < ApplicationController
  before_action :set_twixt, only: %i[show]

  def show
    super
    true
  end

  def create
    @twixt = current_twixy.twixts.build(twixt_params)
    if @twixt.save
      render @twixt
    else
      render json: {errors: @twixt.errors}, status: :unprocessable_entity
    end
  end

  private

  def twixt_params
    params.require(:twixt).permit(:text)
  end
end
