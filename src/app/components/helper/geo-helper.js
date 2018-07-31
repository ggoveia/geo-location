angular.module("helper-module", [])
    .component("geoHelper", {
        template: '<span class="glyphicon glyphicon-question-sign glyphicon-pointer" data-toggle="tooltip" title="{{$ctrl.description}}"></span>',
        controller: 'geoHelperController',
        bindings: {
            for: '@'
        }
    });