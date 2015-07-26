MyApp.Subletting.AppartmentsList = function(){
  var AL = {};

  var AppartmentView = Backbone.Marionette.ItemView.extend({
    template: "#appartment-template"
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