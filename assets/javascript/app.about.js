MyApp.About = {};

MyApp.About.DefaultView = Backbone.Marionette.ItemView.extend({
  template: "#about-template",
  className: "about"
});

MyApp.About.Router = Backbone.Marionette.AppRouter.extend({
  appRoutes: {
    "about": "about"
  }
});

MyApp.About.about = function(){
  var aboutView = new MyApp.About.DefaultView();
  MyApp.content.show(aboutView);
  Backbone.history.navigate("about");
}


//Instatiation happens in the add Initializer

MyApp.addInitializer(function(){
  MyApp.About.router = new MyApp.About.Router({
    controller: MyApp.About
  });

  MyApp.vent.trigger("routing:started");
});
