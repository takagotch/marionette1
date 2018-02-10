var profileView = new com.apress.view.MarionetteProfileView({user: 'sugrue'});
MApp.mainRegion.attachView(profileView);

MApp.getRegion('mainRegion').reset();
MApp.mainRegion.close(profileView);

