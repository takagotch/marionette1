var com = com || {};
com.appress = com.apress || {};
com.apress.view = com.apress.view || {};

com.apress.view.TimelineItemView = Backbone.Marionette.ItemView.extend({
  
  template: Handlebars.compile($("#timeline-item-template").html()),
  tagName: 'li',

  //
  initialize: function(options){
    console.log('Initialized with ' + options.parameter);
  },

  events: {
    'click .profile': 'showDialog'
  },

  showDialog: function(options){
    var self = this,
      $target = $(options.currentTarget),
      username = $target.data('user');

      var profileView = new com.apress.view.ProfilePopupView({
        user: username
      });
  }
});




