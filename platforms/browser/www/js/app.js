angular.module('chattCrime', [
    'uiGmapgoogle-maps',
    'crimeLoader'
])

.config(['uiGmapGoogleMapApiProvider', function (GoogleMapApi) {
  GoogleMapApi.configure({
    key: 'AIzaSyB_xr0OLgaTL1pVRTMGCVSYeX9LbloN1W4',
    v: '3.17',
  });
}])

.controller('mapController', [
    '$scope',
    'uiGmapGoogleMapApi',
    'crimeLoader',
    '$interval',
    function($scope, GoogleMapApi, crimeLoader, $interval) {
    GoogleMapApi.then(function(maps) {
      $scope.map = { center: { latitude: 35.045048, longitude: -85.311132}, zoom: 12 };
      $scope.places = [];

      $interval(function() {
        crimeLoader().then(function(e) {
          $scope.places.push(e);
        });
      }, 5000);
    });

    }
]);
