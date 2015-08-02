MyApp.Subletting = function(){
  var S = {};

  S.renderSubletting = function(){
    console.log('render content');


  }

  var Apartment = Parse.Object.extend('Appartment');

  var Apartments = Parse.Collection.extend({
    model: Apartment,

    query: new Parse.Query(Apartment),

    initialize: function(){
      var self= this;
      MyApp.vent.on('search:param', function(param){self.search(param); });
    },

    initializeData: function(){
      this.fetch({success: function(){MyApp.vent.trigger('search:complete');}});
    },
    search: function(param){
      this.query.contains('name', param);
      //show spinner
      MyApp.vent.trigger('search:begin');


      var self = this;
      this.query.find({
        success: function(results) {
          self.reset(results)
          // hide spinner
          MyApp.vent.trigger('search:complete');

        },

        error: function(error) {
          // error message
        }
      });

    }

  });

  S.Apartments = new Apartments();

  MyApp.addInitializer(function(){
    MyApp.Subletting.initializeLayout();
    S.Apartments.initializeData();
    MyApp.Subletting.ApartmentsList.showApartments(S.Apartments);
  });

  return S;

}();