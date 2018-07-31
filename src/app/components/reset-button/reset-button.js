angular.module("reset-button-module", []).component("resetButton", {
    template: '<button type="button" ng-click="$ctrl.resetLocation()" class="btn btn-default" ng-bind="$ctrl.description"></button>',
    controller: 'resetButtonController',
    bindings: {
        description: '@',
        onLocationChange: '&'
    }
});