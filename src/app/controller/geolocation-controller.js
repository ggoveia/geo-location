angular.module("geolocation-module")
  .controller("geolocationController", geolocationController);

function geolocationController() {
  this.location = {};

  this.setLocation = function (eventLocation) {
    this.location = eventLocation
  }
}