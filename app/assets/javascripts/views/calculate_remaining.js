BudgetApp.Views.CalculateRemaining = Backbone.View.extend({

  template: JST["remaining"],

  initialize: function() {
    this.compute(this.model);
  },

  compute: function(spent) {
    this.remaining = (BUDGET.get("number") - spent);
  },

  render: function() {

    var content = this.template({remaining: this.remaining});
    this.$el.html(content);
    return this;
  },
});