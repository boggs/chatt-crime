angular.module('crimeLoader', [
    'serverData',
    'geoCoder'
])

.factory('crimeLoader',
    function(serverData, geoCoder, $rootScope, $q, $http){
      var crimes = serverData.query();

      var getPoint = function() {
        var deferred = $q.defer(),
          crime = crimes[Math.floor(Math.random() * crimes.length)];

        geoCoder.init();
        geoCoder.geoCodeAddress(crime.address).then(function(coords) {
          angular.extend(crime, coords);
          crime.options = {title: crime.type};
          crime.id = Math.random().toString(36).substring(7);
          deferred.resolve(crime);
        });

        return deferred.promise;
      };

      return getPoint;
    }
);
