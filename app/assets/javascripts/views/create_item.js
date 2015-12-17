BudgetApp.Views.CreateItem = Backbone.View.extend({

  template: JST["createItem"],

  events: {
    "submit form":"submit"
  },

  submit: function(event) {
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON()["item"];
    var newItem = new BudgetApp.Models.Item(params);
    newItem.save({}, {success: function(){
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