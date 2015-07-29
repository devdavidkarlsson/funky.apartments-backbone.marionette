MyApp.Subletting.SearchView = function(){
var SearchView = Backbone.View.extend({
  el: "#searchBar",

  initialize: function(){
    var self = this;
    var $spinner = self.$('#spinner');
    MyApp.vent.on("search:begin", function(){ $spinner.fadeIn(); });
    MyApp.vent.on("search:complete", function(){ $spinner.fadeOut(); });
  },

  events: {
    'change #searchTerm': 'search'
  },

  search: function() {
    var searchTerm = this.$('#searchTerm').val().trim();
    if(searchTerm.length > 0){
      MyApp.vent.trigger("search:param", searchTerm);
      self.$('#searchTerm').val(searchTerm);
    }
  }
});

MyApp.vent.on("layout:rendered", function(){
  // render a view for the existing HTML in the template, and attach it to the layout (i.e. don't double render)
  var searchView = new SearchView();
  MyApp.Subletting.layout.search.attachView(searchView);
});

}();