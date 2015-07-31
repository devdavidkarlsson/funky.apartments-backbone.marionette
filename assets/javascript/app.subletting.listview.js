MyApp.Subletting.AppartmentsList = function(){
  var AL = {};

  var AppartmentDetailView = Backbone.Marionette.ItemView.extend({
    template: "#appartment-detail-template",
    className: "appartmentDetail",
    events:{
      'click .close': 'hideDetails'
    },
    initialize: function(){
      var self = this;
      MyApp.vent.on("search:param", function(){self.hideDetails(); });
    },
    hideDetails: function(){
      AL.showAppartments(MyApp.Subletting.Appartments);
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