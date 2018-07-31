angular.module('geolocation-module')
    .factory('locationServiceRest', locationServiceRest);

locationServiceRest.$inject = ["$http", "$q"];

function locationServiceRest($http, $q) {

    return {
        getMyLocation: getMyLocation,
        getLocation: getLocation
    }

    function getMyLocation() {
        var defer = $q.defer();
        $http.get('http://ip-api.com/json/').then(function (result) {
            defer.resolve(result.data);
        });
        return defer.promise;
    }

    function getLocation(url) {
        var defer = $q.defer();
        $http.get('http://ip-api.com/json/' + url).then(function (result) {
            defer.resolve(result.data);
        });
        return defer.promise;
    }
}