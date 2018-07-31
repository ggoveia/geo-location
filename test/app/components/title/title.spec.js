describe('title component ', function () {

    var expectedHtml = '<geo-title text="Geolocation Test" class="ng-isolate-scope"><div class="title ng-binding">Geolocation Test</div></geo-title>'
    var titleComponent;

    beforeEach(module('title-module'));

    beforeEach(inject(function ($compile, $rootScope) {

        var scope = $rootScope.$new();
        titleComponent = $compile("<div><geo-title text=\"Geolocation Test\"></geo-title></div>")(scope);
        scope.$apply();

    }));

    it('should render title correclty', function () {

          expect(titleComponent[0].innerHTML).toEqual(expectedHtml);

    })
}); 