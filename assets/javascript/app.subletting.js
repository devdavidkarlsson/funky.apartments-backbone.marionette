MyApp.Subletting = function(){
  var S = {};

  S.renderSubletting = function(){
    console.log('render content');


  }

var Apartment = Parse.Object.extend('Appartment');

var Apartments = Backbone.Collection.extend({
  model: Apartment,
  query: new Parse.Query(Apartment),
  initialize: function(){
    MyApp.vent.on('search:param', function(param){self.search(param); });
    var self = this;
    this.query.find({
        success: function(results){
            self.reset();
            results.forEach(function(result){
              result.attributes.id__ = result.id
              var ap = new Apartment(result.attributes);
              self.add(ap);
            });
          }
      });

  },
  search: function(param){
      this.query.contains('name', param);
      //show spinner
      MyApp.vent.trigger('search:begin');


      var self = this;
      this.query.find({
        success: function(results) {
          self.reset();
          results.forEach(function(result){
              result.attributes.id = result.id
              var ap = new Apartment(result.attributes);
              self.add(ap);
          });
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
    MyApp.Subletting.ApartmentsList.showApartments(S.Apartments);
  });

  return S;

}();
