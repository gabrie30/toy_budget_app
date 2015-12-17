class Api::ItemsController < ApplicationController

  def index
    @items = Item.all
    @total = Item.sum(:price)
    render :index
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      render :index
    else
      render :json, status: :improcessible_entity
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy!
    render :index
  end

  private

  def item_params
    params.require(:item).permit(:name, :price)
  end
end