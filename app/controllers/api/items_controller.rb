class Api::ItemsController < ApplicationController
  def create
    @basket = Basket.find(params[:basket_id])

    # if an item with this name exists, use the existing item
    if @item = Item.find_by_name(item_params[:name])
      # handle malformed requests
      unless @item.save
        render json: @item.errors.messages, status: 422
        return
      end
      # add the existing item to our basket (works with multiple copies)
      @basket.items << @item
      render "api/items/show"
    # otherwise create a new item
    else
      @item = @basket.items.create(item_params)
      if @item.save
        render "api/items/show"
      else
        render json: @item.errors.messages, status: 422
      end
    end
  end

  def show
    @item = Item.find(params[:id])
  end

  def index
    # handled as BasketsController#show
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
