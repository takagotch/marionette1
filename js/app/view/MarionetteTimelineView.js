var com = com || {};
com.apress = com.apress || {};
com.apress.view = com.apress.view || {};

com.apress.view.MarionetteTimelineView =
  Backbone.Marionette.CollectionView.extend({
  
  //itemView : com.apress.view.TimelineItemView,
  el: '#timeline-list',
  itemView : com.apress.view.TimelineItemView,

  initialize: function(options){
    var self = this;

    self.itemView = com.apress.view.TimelineItemView;

    self.collection = new com.apress.collection.Timeline();
    self.render();

    self.collection.fetch({ reset: true});
    self.listenTo(self.collection, 'reset', self.render);
  }
});


