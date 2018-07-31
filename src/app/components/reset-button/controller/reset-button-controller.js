angular.module('reset-button-module')
    .controller('resetButtonController', resetButtonController);

resetButtonController.$inject = ["locationService"];

function resetButtonController(locationService) {
    var vm = this;
    vm.resetLocation = resetLocation;

    function resetLocation() {
        locationService.resetLocation();
        vm.onLocationChange({ $event: { location: locationService.getLocation() } })
    }
}
