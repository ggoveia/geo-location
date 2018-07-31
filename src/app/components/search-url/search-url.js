angular.module("search-url-module", ["location-button-module"]).component("searchUrl", {
    templateUrl: '/src/app/components/search-url/template/search-url-template.html',
    controller: 'searchUrlController',
    bindings: {
        url: '@',
        location: "@", 
        onLocationChange: "&"
    }
});

