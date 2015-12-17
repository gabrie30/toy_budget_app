window.BudgetApp.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    "":"budgetIndex",
  },

  budgetIndex: function() {
    BudgetApp.Collections.items = new BudgetApp.Collections.Items();
    BudgetApp.Collections.items.fetch();

    var indexView = new BudgetApp.Views.itemIndex({collection: BudgetApp.Collections.items});

    this._swapView(indexView);
  },

  _swapView: function(newView) {
    if (this.currentView) {
      this.currentView.remove();
    }

    this.currentView = newView;
    $("body").html(this.currentView.render().$el);
  },

});