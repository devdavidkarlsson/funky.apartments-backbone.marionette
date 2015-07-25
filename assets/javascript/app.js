MyApp = new Backbone.Marionette.Application();

MyApp.addRegions({
  content: "#content"
});


MyApp.vent.on("routing:started", function(){
  if( ! Backbone.History.started) Backbone.history.start();
});
