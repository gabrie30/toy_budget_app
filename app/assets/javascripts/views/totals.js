BudgetApp.Views.Totals = Backbone.View.extend({

  template: JST["totals"],

  initialize: function() {
    this.listenTo(this.collection, "sync add remove", this.calculateTotals);
  },

  calculateTotals: function(start) {
    var self = this;
    this.total = start;
    this.collection.each(function(item){
      self.total += item.get("price");
    });
  },

  render: function() {
    this.calculateTotals(0);
    var content = this.template({total: this.total});
    this.$el.html(content);
    return this;
  },
});