MyApp.Subletting = function(){
  var S = {};

  S.renderSubletting = function(){
    console.log('render content');
  }

  var Appartment = Parse.Object.extend("Appartment");

  var Appartments = Parse.Collection.extend({
    model: Appartment,

    initializeData: function(){
      this.query = new Parse.Query(Appartment);
      this.fetch();
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