BudgetApp.Views.ChangeBudgetForm = Backbone.View.extend({

  template: JST["change_budget_form"],

  events: {
    "submit form":"newBudget"
  },

  newBudget: function(event) {
    event.preventDefault();
    var self = this;
    var newBudget = new BudgetApp.Models.Budget();
    var budgetParam = $("#number").val();
    newBudget.set("number", budgetParam);
    newBudget.save({},{success: function() {
      window.BUDGET.set("number", budgetParam);
      BudgetApp.Collections.items.fetch();
    }});

    this.$el.remove();
  },

  render: function() {

    var content = this.template();
    this.$el.html(content);
    return this;
  },
});