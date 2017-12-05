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
    @basket = Basket.find(params[:id])
    # Empty out our join table entries. Note that this triggers N+1 queries.
    #   We can either do a single DELETE query via .delete_all, or N+1 using
    #   .destroy_all. The benefit of .destroy_all is the ability to conditionally
    #   render a 422 error on failure.
    if @basket.basket_items.destroy_all
      render "api/baskets/show"
    else
      render json: @basket.errors.messages, status: 422
    end
  end

  private
  def basket_params
    params.require(:basket).permit(:name)
  end
end
