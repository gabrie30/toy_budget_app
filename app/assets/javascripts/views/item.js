window.BudgetApp.Views.Item = Backbone.View.extend({
  tagName: "tr",

  template: JST["item"],

  events: {
    "click .delete": "destroyItem",
  },

  destroyItem: function(event) {
    event.preventDefault();
    this.model.destroy();
  },

  render: function() {
    var content = this.template({item: this.model});
    this.$el.html(content);
    return this;
  }
});