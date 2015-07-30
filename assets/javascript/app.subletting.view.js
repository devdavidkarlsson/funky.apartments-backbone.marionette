MyApp.Subletting.initializeLayout = function(){

  var Layout = Backbone.Marionette.Layout.extend({
    template: "#subletting-layout",

    regions: {
      search: "#searchBar",
      appartments: "#appartmentContainer",
      details: "#appartmentContainer"
    }
  });

  MyApp.Subletting.layout = new Layout();

  MyApp.Subletting.layout.on("show", function(){
    MyApp.vent.trigger("layout:rendered");
  });
  MyApp.content.show(MyApp.Subletting.layout);
};
