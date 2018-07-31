angular.module('search-url-module')
  .controller('searchUrlController', searchUrlController);

searchUrlController.$inject = ["locationService"];

function searchUrlController(locationService) {

  var vm = this;
  var REGEX = /[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/;

  vm.searchLocationByUrl = searchLocationByUrl;
  vm.searchMyLocation = searchMyLocation;
  vm.resetLocation = resetLocation;
  vm.validateUrl = validateUrl;
  vm.error = '';

  function searchLocationByUrl() {

    if (!validateUrl()) return;

    resetError()

    locationService.searchForLocation(vm.url).then(function () {
      vm.onLocationChange({
        $event: {
          location: locationService.getLocation()
        }
      })
    });
  }

  function searchMyLocation() {
    locationService.searchForMyLocation().then(function () {
      vm.onLocationChange({
        $event: {
          location: locationService.getLocation()
        }
      })
    });

    resetError()
  }

  function resetLocation() {
    locationService.resetLocation();
    resetTextLocation();

    vm.onLocationChange({
      $event: {
        location: locationService.getLocation()
      }
    });

    resetError();
  }

  function validateUrl() {
    if (vm.url == undefined) return false;
    if (REGEX.test(vm.url)) return true;

    vm.error = "The field only accepts website domains starting with 'www.' or with the host name";
    return false;
  }

  function resetError() {
    vm.error = "";
  }
  function resetTextLocation() {
    vm.url = "";
  }
}