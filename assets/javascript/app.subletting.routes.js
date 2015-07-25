MyApp.Subletting.Router = function(){
  var SR = {};

  SR.Router = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      "": "renderSubletting"
    }
  });


  MyApp.addInitializer(function(){
    SR.router = new SR.Router({
      controller: MyApp.Subletting
    });

    MyApp.vent.trigger("routing:started");
  });

  return SR;
}();