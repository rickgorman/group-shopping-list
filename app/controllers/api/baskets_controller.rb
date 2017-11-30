class Api::BasketsController < ApplicationController
  def create
    @basket = Basket.new(basket_params)
    if @basket.save
      render "api/baskets/show"
    else
      render json: @basket.errors.messages, status: 422
    end
  end

  def show
    @basket = Basket.find(params[:id])
  end

  def index
    # intentionally left blank
  end

  def update
    # intentionally left blank
  end

  def destroy
    # intentionally left blank
  end

  private
  def basket_params
    params.require(:basket).permit(:name)
  end
end
