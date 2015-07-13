angular.module('geoCoder', [
    'ngResource'
])

.service('geoCoder',
    function($resource, $q) {
      console.log('test');
      var geoCoder = {};
      var googleGeoCoder;

      geoCoder.geoCodeAddress = function(address) {
        var deferred = $q.defer(); 
        googleGeoCoder.geocode({ 'address': address },
            function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                var coords = {
                  latitude: results[0].geometry.location.lat(),
                  longitude: results[0].geometry.location.lng()
                };
                deferred.resolve(coords);
              }
            }
        );
        return deferred.promise;
      };

      geoCoder.init = function(){
        if (googleGeoCoder === undefined) {
          googleGeoCoder = new google.maps.Geocoder();
        }
      };

      return geoCoder;
    }
);
