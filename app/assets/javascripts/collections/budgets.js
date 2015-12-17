BudgetApp.Collections.Budgets = Backbone.Collection.extend({
  
  model: BudgetApp.Models.Budget,
  url: "api/budgets",
});