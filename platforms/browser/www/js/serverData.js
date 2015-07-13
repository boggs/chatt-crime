angular.module('serverData', ['ngResource'])

.factory('serverData',
    function($resource) {
      var url = 'js/server_data.json';
      return $resource(url);
    }
);
