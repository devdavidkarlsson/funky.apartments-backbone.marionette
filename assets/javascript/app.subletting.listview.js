MyApp.Subletting.ApartmentsList = function(){
  var AL = {};

  var ApartmentDetailView = Backbone.Marionette.ItemView.extend({
    template: "#apartment-detail-template",
    className: "apartmentDetail",
    events:{
      'click .close': 'hideDetails',
      'click .descApartment': 'editDetails'
    },

    initialize: function(){
      var self = this;
      MyApp.vent.on("search:param", function(){self.hideDetails(); });
    },
    editDetails: function(){
      var editView = new ApartmentEditView({model: this.model});
      MyApp.Subletting.layout.details.show(editView);
    },
    hideDetails: function(){
      AL.showApartments(MyApp.Subletting.Apartments);
    }
  });

  var ApartmentEditView = Backbone.Marionette.ItemView.extend({
    template: "#apartment-edit-template",
    className: "apartmentDetail",
    events: {
      "click .store": "storeEdit",
      "click .close": "closeEdit"
    },
    storeEdit: function(){
      var priceNum = Number($('#price_field').val().replace(/\s/g, ''));
      //If not a number show an error.
      this.model.set({
        id: this.model.attributes.id__,
        name:$('#name_field').val(),
        price:priceNum,
        description:$('#desc_field').val(),
        url:$('#url_field').val()
      });
      this.model.save();
      this.closeEdit();
    },
    closeEdit: function(){
      var detailView = new ApartmentDetailView({model: this.model});
      MyApp.Subletting.layout.details.show(detailView);
    }

  });

  var ApartmentView = Backbone.Marionette.ItemView.extend({
    template: "#apartment-template",

    events: {
      'click': 'showDetails'
    },

    showDetails: function(){
      var detailView = new ApartmentDetailView({model: this.model});
      MyApp.Subletting.layout.details.show(detailView);
    }
  });

  var ApartmentListView = Backbone.Marionette.CompositeView.extend({
    template: "#apartment-list-template",
    id: "apartmentList",
    childView: ApartmentView,

    attachHtml: function(collectionView, childView){
      collectionView.$(".apartments").append(childView.el);
    }
  });

  AL.showApartments = function(apartments){
    var apartmentListView = new ApartmentListView({ collection: apartments });
    MyApp.Subletting.layout.apartments.show(apartmentListView);
  };

  return AL;
}();