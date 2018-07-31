describe("reset-button component", function () {

    beforeEach(module('geolocation-module'));

    describe("reset-button render", function () {

        var expectedHtml = '<reset-button description="Reset" class="ng-isolate-scope"><button type="button" ng-click="$ctrl.resetLocation()" class="btn btn-default ng-binding" ng-bind="$ctrl.description">Reset</button></reset-button>'

        beforeEach(inject(function ($compile, $rootScope) {
            var scope = $rootScope.$new();
            inputUrl = $compile('<div><reset-button description=\"Reset\"></reset-button></div>')(scope);
            scope.$apply();
        }));

        it("should be rendered correctly", function () {
            expect(inputUrl[0].innerHTML).toEqual(expectedHtml);
        });
    });

    describe("reset-button controller", function () {

        var resetButton;
        var controllerToBeTested;
        var locationService;
        var onLocationChange = function (object) { };

        beforeEach(module('reset-button-module'));

        beforeEach(inject(function (_locationService_, _$componentController_) {
            locationService = _locationService_;
            controllerToBeTested = _$componentController_('resetButton', locationService, { onLocationChange: onLocationChange });
            spyOn(locationService, "resetLocation");
            spyOn(controllerToBeTested, "onLocationChange");
        }));

        it("should clear a model", function () {
            var teste = controllerToBeTested.resetLocation();
            expect(locationService.resetLocation).toHaveBeenCalled();
            expect(controllerToBeTested.onLocationChange).toHaveBeenCalled();
        });

    });

});