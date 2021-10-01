class Api::ProductsController < ApplicationController

  def index
    render json: Product.w_seller
  end

  def sellers
    render json: Product.sellers
  end

  def products_by_seller
    render json: Product.by_sellers(params[:id])
  end

  def categories
    render json: Product.unique_category
  end

  def category_prices
    render json: Product.prices_by_category
  end



end
