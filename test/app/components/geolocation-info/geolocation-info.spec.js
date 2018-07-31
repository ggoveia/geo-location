describe("geolocation info component", function () {

    beforeEach(module('geolocation-info-module'));
    beforeEach(module('template-module'));

    describe("geolocation info rendering ", function () {
        var geolocation;

        beforeEach(inject(function ($compile, $rootScope) {
            var scope = $rootScope.$new();
            geolocation = $compile('<div><geolocation-info></geolocation-info></div>')(scope);
            scope.$apply();
        }));

        it("should be rendered with helpers", function () {
            expect(geolocation.find("geo-helper")).not.toEqual([]);
            expect(geolocation.find("span")).not.toEqual([]);
            expect(geolocation.find("div")).not.toEqual([]);
        });
    });
});