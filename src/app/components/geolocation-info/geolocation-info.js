angular.module("geolocation-info-module", [])
    .component("geolocationInfo", {
        templateUrl: "/src/app/components/geolocation-info/template/geolocation-info-template.html",
        controller: "geolocationInfoController",
        bindings: {
            location: "<"
        }
    });

angular.module("geolocation-info-module")
    .controller("geolocationInfoController", geolocationInfoController);

function geolocationInfoController() {

}