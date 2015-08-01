MyApp.Subletting.AppartmentsList = function(){
  var AL = {};

  var AppartmentDetailView = Backbone.Marionette.ItemView.extend({
    template: "#appartment-detail-template",
    className: "appartmentDetail",
    events:{
      'click .close': 'hideDetails',
      'click .descAppartment': 'editDetails'
    },

    initialize: function(){
      var self = this;
      MyApp.vent.on("search:param", function(){self.hideDetails(); });
    },
    editDetails: function(){
      var editView = new AppartmentEditView({model: this.model});
      MyApp.Subletting.layout.details.show(editView);
    },
    hideDetails: function(){
      AL.showAppartments(MyApp.Subletting.Appartments);
    }
  });

  var AppartmentEditView = Backbone.Marionette.ItemView.extend({
    template: "#appartment-edit-template",
    className: "appartmentDetail",
    events: {
      "click .store": "storeEdit",
      "click .close": "closeEdit"
    },
    storeEdit: function(){
      var priceNum = Number($('#price_field').val().replace(/\s/g, ''));
      //If not a number show an error.

      this.model.set({
        name:$('#name_field').val(),
        price:priceNum,
        description:$('#desc_field').val(),
        url:$('#url_field').val()
      });
      this.model.save();
      this.closeEdit();
    },
    closeEdit: function(){
      var detailView = new AppartmentDetailView({model: this.model});
      MyApp.Subletting.layout.details.show(detailView);
    }

  });

  var AppartmentView = Backbone.Marionette.ItemView.extend({
    template: "#appartment-template",

    events: {
      'click': 'showDetails'
    },

    showDetails: function(){
      var detailView = new AppartmentDetailView({model: this.model});
      MyApp.Subletting.layout.details.show(detailView);
    }
  });

  var AppartmentListView = Backbone.Marionette.CompositeView.extend({
    template: "#appartment-list-template",
    id: "appartmentList",
    itemView: AppartmentView,

    appendHtml: function(collectionView, itemView){
      collectionView.$(".appartments").append(itemView.el);
    }
  });

  AL.showAppartments = function(appartments){
    var appartmentListView = new AppartmentListView({ collection: appartments });
    MyApp.Subletting.layout.appartments.show(appartmentListView);
  };

  return AL;
}();