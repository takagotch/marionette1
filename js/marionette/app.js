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


