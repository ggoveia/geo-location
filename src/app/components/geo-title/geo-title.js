angular.module("title-module", []).component("geoTitle", {
    template: '<div class="title">{{$ctrl.text}}</div>',
    bindings: {
        text: '@'
    }
});
