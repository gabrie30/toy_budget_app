window.BudgetApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var budget = new BudgetApp.Collections.Budgets();
    budget.fetch({success: function(){
      window.BUDGET = budget.at(0);
    }});

    new BudgetApp.Routers.AppRouter();
    Backbone.history.start();
  }
};