BudgetApp.Views.Budget = Backbone.View.extend({

  template: JST["budget"],

  render: function() {
    var content = this.template({budget: window.BUDGET});
    this.$el.html(content);
    return this;
  },
});