MyApp.Subletting = function(){
  var S = {};

  S.renderSubletting = function(){
    console.log('render content');
  }

  var Appartment = Backbone.Model.extend();

  var Appartments = Backbone.Collection.extend({
    model: Appartment,
    initializeData: function(){
      var self = this;
      var callback = function (data){console.log(data); self.reset(data)};
      S.Appartments.fetch(callback);

    },
    fetch: function(callback){
      var result = [{name: "14D"},{name: "14E"}];
      callback(result);
      return result;
    }

  });

  S.Appartments = new Appartments();

  MyApp.addInitializer(function(){
    S.Appartments.initializeData();
  });

  return S;

}();