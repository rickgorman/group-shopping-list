class Api::ItemsController < ApplicationController
  def create
    @basket = Basket.find(params[:basket_id])
    @item = @basket.items.create(item_params)
    if @item.save
      render "api/items/show"
    else
      render json: @item.errors.messages, status: 422
    end
  end

  def show
    @item = Item.find(params[:id])
  end

  def index
    @basket = Basket.find(params[:basket_id])
  end

  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      render "api/items/show"
    else
      render json: @item.errors.messages, status: 422
    end
  end

  def destroy
    @item = Item.find(params[:id])
    if @item.destroy
      render json: ["#{@item.name} Deleted"]
    else
      render json: @item.errors.messages, status: 422
    end
  end

  private
  def item_params
    params.require(:item).permit(:name)
  end
end
