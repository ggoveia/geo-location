angular.module('geolocation-module')
    .factory('locationService', locationService);

locationService.$inject = ["locationServiceRest", "$q"];

function locationService(locationServiceRest, $q) {

    var location = {};

    return {
        getLocation: getLocation,
        resetLocation: resetLocation,
        searchForLocation: searchForLocation,
        searchForMyLocation: searchForMyLocation
    }

    function setLocation(foundLocation) {
        location = foundLocation;
    }

    function searchForMyLocation() {
        return locationServiceRest.getMyLocation().then(function (data) {
            setLocation(data);
        });
    }

    function searchForLocation(url) {
        return locationServiceRest.getLocation(url).then(function (data) {
            setLocation(data);
        });
    }

    function getLocation() {
        return location;
    }

    function resetLocation() {
        location = {};
    }
}