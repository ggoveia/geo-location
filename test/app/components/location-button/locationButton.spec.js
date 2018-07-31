describe("location button component", function () {

    beforeEach(module('location-button-module'))
    beforeEach(module('geolocation-module'));


    describe("my-location button", function () {

        var expectedHtml = '<location-button from="me" class="ng-isolate-scope"><button type="button" class="btn btn-default ng-binding" ng-bind="$ctrl.buttonName"></button></location-button>'

        beforeEach(inject(function ($compile, $rootScope) {
            var scope = $rootScope.$new();
            locationButton = $compile('<div><location-button from="me"></location-button></div>')(scope);
            scope.$apply();
        }));

        it("should render my location button", function () {
            expect(locationButton[0].innerHTML).toEqual(expectedHtml);
        });
    });

});