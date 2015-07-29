MyApp.Subletting = function(){
  var S = {};

  S.renderSubletting = function(){
    console.log('render content');
  }

  var Appartment = Backbone.Model.extend();
  //var Appartment = Parse.Object.extend("Appartment");

  var Appartments = Backbone.Collection.extend({
  //var Appartments = Parse.Collection.extend({
    model: Appartment,

    initializeData: function(){
     var result = [{name: "14D", url: "http://placehold.it/100x150"},{name: "14E", url: "http://placehold.it/100x150"}];
      //this.query = new Parse.Query(Appartment);

      //var result = this.fetch();
      this.reset(result);
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