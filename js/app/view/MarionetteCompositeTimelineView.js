var com = com || {};
com.apress = com.apress || {};
com.apress.view = com.apress.view || {};

com.apress.view.MarionetteCompositeTimelineView =
  Backbone.Marionette.CompositeView.extend({

  //
  el: '#timeline',
  template: Handlerbars.compile($("#timeline-template").html()),
  itemView: com.apress.view.TimelineItemView,

  initialize: function(options){
    var self = this;

    self.itemView = com.apress.view.TimelineItemView;

    self.collection = new.apress.collection.Timline();
    self.render();

    self.collection.fetch({ reset: true});
    self.listTo(self.collection, 'reset', self.render);
  }


  appendHtml: function(compositeView, itemView){
    compositeView.$('#timeline-list').append(itemView.el);
  }

  });


