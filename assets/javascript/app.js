MyApp = new Backbone.Marionette.Application();

MyApp.addRegions({
  content: "#content"
});

Parse.initialize("vhvGrXjP3wJ7t2NvnBYvQ0vGlWu7MaGnClJtQJ8F", "9QRaq5fAJZcAvFcGIam4UpNEZXVk8B1fVvo2wBoF");



MyApp.vent.on("routing:started", function(){
  if( ! Backbone.History.started) Backbone.history.start();
});
