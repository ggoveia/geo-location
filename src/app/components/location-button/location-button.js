angular.module("location-button-module", []).component("locationButton", {
    template: '<button type="button" class="btn btn-default" ng-bind="$ctrl.buttonName">Locate</button>',
    bindings: {
        from: '@',
        buttonName: '@'
    }
});