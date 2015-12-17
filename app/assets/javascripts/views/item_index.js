window.BudgetApp.Views.itemIndex = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, "sync remove", this.buildItems);
    this.listenTo(this.collection, "sync remove", this.buildTotals);
  },

  events: {
    "click button.create_item":"createItem",
    "click button.change_budget":"changeBudget"
  },

  template: JST["itemIndex"],

  changeBudget: function() {
    var changeBudgetView = new BudgetApp.Views.ChangeBudgetForm();
    $(".create_item_view").html(changeBudgetView.render().$el);
  },

  createItem: function() {
    var createItemView = new BudgetApp.Views.CreateItem();
    $(".create_item_view").html(createItemView.render().$el);
  },

  calculateRemaining: function() {
    var remainingView = new BudgetApp.Views.CalculateRemaining({model: $(".total_spend").data("spent")});
    $(".totals").append(remainingView.render().$el);
  },

  loadBudget: function() {
    var budgetView = new BudgetApp.Views.Budget();
    $(".totals").prepend(budgetView.render().$el);
    this.calculateRemaining();
  },

  buildTotals: function() {
    var totalView = new BudgetApp.Views.Totals({collection: this.collection});
    $(".totals").html(totalView.render().$el);
    this.loadBudget();
  },

  buildItems: function() {
    $(".item_list").empty();
    var self = this;
    this.collection.each(function(item){
      var itemView = new BudgetApp.Views.Item({model: item, collection: self.collection});
      $(".item_list").append(itemView.render().$el);
    });
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
});