describe("Geolocation controller - ", function () {
    beforeEach(module('geolocation-module'));
    var scope, $location, createController;
    describe("Input data on 'location' binding - ", function () {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();

            createController = function () {
                return $controller('geolocationController');
            };
        }))

        it("Should input data on location binding", function () {
            var controller = createController();
            controller.setLocation("location");
            expect(controller.location).toEqual("location");
        })
    })
})