class Api::BudgetsController < ApplicationController

  def index
    @budget = Budget.last
  end

  def create
    @budget = Budget.new(budget_params)
    if @budget.save
      render :index
    else
      render :json, status: :improcessible_entity
    end
  end

  private 

  def budget_params
    params.require(:budget).permit(:number)
  end
end