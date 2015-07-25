MyApp.Subletting = function(){
  var S = {};

  S.renderSubletting = function(){
    console.log('render content');
  }

  var Appartment = Backbone.Model.extend();

  var Appartments = Backbone.Collection.extend({
    model: Appartment,
    fetch: function(callback){
      var result = [{name: "14D"},{name: "14E"}];
      callback(result);
      return result;
    }

  });

  S.Appartments = new Appartments();

  MyApp.addInitializer(function(){
    var testCallback = function (data){console.log(data);}
    S.Appartments.fetch(testCallback);
  });

  return S;

}();