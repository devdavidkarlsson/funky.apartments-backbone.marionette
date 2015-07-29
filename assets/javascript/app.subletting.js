MyApp.Subletting = function(){
  var S = {};

  S.renderSubletting = function(){
    console.log('render content');


  }

  var Appartment = Parse.Object.extend('Appartment');

  var Appartments = Parse.Collection.extend({
    model: Appartment,

    query: new Parse.Query(Appartment),

    initialize: function(){
      var self= this;
      MyApp.vent.on("search:param", function(param){self.search(param); });
    },

    initializeData: function(){
      //this.query = new Parse.Query(Appartment);
      this.fetch({success: function(){MyApp.vent.trigger("search:complete");}});
    },
    search: function(param){
      this.query.contains('name', param);
      //show spinner
      MyApp.vent.trigger("search:begin");


      var self = this;
      this.query.find({
        success: function(results) {
          self.reset(results)
          // hide spinner
          MyApp.vent.trigger("search:complete");

        },

        error: function(error) {
          // error message
        }
      });

    }

  });

  S.Appartments = new Appartments();

  MyApp.addInitializer(function(){
    MyApp.Subletting.initializeLayout();
    S.Appartments.initializeData();
    MyApp.Subletting.AppartmentsList.showAppartments(S.Appartments);
  });

  return S;

}();