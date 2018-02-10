MApp.addRegions({
  mainRegion: '#app'
});

//
AppRegion = Marionette.Region.extend({
  el: '#app'
});

MApp.addRegions({
  mainRegion: AppRegion
});

var profileView = new com.apress.view.MarionetteProfileView({user: 'sugurus'});

AppRegion = Marionette.Region.extend({
  el: '#app'
  currentView: profileView;
});

//
MApp.mainRegion.on("show", function(view){
  console.log(' View has been displayed ');
});
MApp.mainRegion.on("close", function(view){
  console.log(' View has been closed ');
});

MApp.mainRegion.show(profileView);
MApp.mainRegion.close(profileView);

//
AppRegion = Marionette.Region.extend({
  el: '#app',
  currentView: profileView,
  onShow: function(view){
    console.log('View is shown');
  },
  onClose: function(viwe){
    console.log('View is closed');
  }
});

//
$(function(){
  MApp = new Backbone.Marionette.Application();
  var timelineView = new com.apress.view.MarionetteTimelineView();
  AppRegion = Marionette.Region.extend({
    el: '#app',
    currentView: timelineView
  });
  MApp.addRegions({
    mainRegion: AppRegion
  });
  MApp.mainRegion.show(timelineView)
});

var timelineView = new com.apress.view.MarionetteCompositeTimelineView();

var timelineView = new com.apress.view.MarionetteCompositeTimelineView();
AppRegion = Marionette.Region.extend({
  el: '#app',
  currentView: timelineView
});

AppRegion = Marionette.Region.extend({
  el: '#app',
});
MApp.addRegions({
  mainRegion: AppRegion
});
var timelineView = new com.apress.view.MarionetteTimelineView();
MApp.mainRegion.attachView(timelineView);


var timelineView = new com.apress.view.MarionetteTimelineView({
  {itemViewOptions: {parameter: 'hello itemview'}}});


AppRegion = Marionette.Region.extend({
  el: 'body',
});


AppLayout = Backbone.Marionette.Layout.extend({
  template: '#app-layout-template',
  regions: {
    timeline: '#timeline-area',
    profile: '#side'
  }
});


var layout = new AppLayout();
MApp.mainRegion.show(layout);


layout.timeline.show(new com.apress.view.MarionetteTimelineView(
  {itemViewOptions: {parameter: 'hello itemview'}}));
layout.profile.show(new com.apress.view.MarionetteProfileView(
  {user: 'sugrue'}));


