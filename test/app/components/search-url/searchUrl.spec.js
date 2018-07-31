describe("search-url component - ", function () {

  beforeEach(module('geolocation-module'));
  beforeEach(module('search-url-module'));
  beforeEach(module('template-module'));

  describe("input url validation test - ", function () {

    var REGEX = /[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/;
    var validUrlList = ["www.google.com", "google.com"];
    var nonValidUrlList = ["google", "1234"];
    var controllerToBeTested;

    beforeEach(inject(function (_$componentController_) {
      controllerToBeTested = _$componentController_('searchUrl', null, {});
      controllerToBeTested.onLocationChange = function () { };
    }));

    all("regex should match all elements", validUrlList, function (value) {
      controllerToBeTested.url = value;
      expect(controllerToBeTested.validateUrl()).toEqual(true);
    });

    all("regex should not match none elements @fail", nonValidUrlList, function (value) {
      controllerToBeTested.url = value;
      expect(controllerToBeTested.validateUrl()).toEqual(false);
    });

  });

  describe("input url render test", function () {

    var expectedInputHtml = '<search-url class="ng-isolate-scope">'
    var expectedLocationButtonHtml = ' <location-button from="" ng-click="$ctrl.searchLocationByUrl()" button-name="Locate" class="ng-isolate-scope"><button type="button" class="btn btn-default ng-binding" ng-bind="$ctrl.buttonName">Locate</button></location-button>'
    var inputUrl;

    beforeEach(inject(function ($compile, $rootScope) {
      var scope = $rootScope.$new();
      inputUrl = $compile('<div><search-url><location-button from=""></location-button></search-url></div>')(scope);
      scope.$apply();
    }));

    it("should be rendered correctly", function () {

      expect(inputUrl[0].innerHTML).toContain(expectedInputHtml);
      expect(inputUrl[0].innerHTML).toContain("search-url");

    });

  });

  describe("should look for location by url - ", function () {
    beforeEach(inject(function (_locationService_, _$componentController_, $q) {
      locationService = _locationService_;
      controllerToBeTested = _$componentController_('searchUrl', null, {});
      controllerToBeTested.onLocationChange = function () { };

      spyOn(locationService, "searchForLocation").and.callFake(function () {
        var defer = $q.defer();
        return defer.promise;
      });
      spyOn(locationService, "searchForMyLocation").and.callFake(function () {
        var defer = $q.defer();
        return defer.promise;
      });

      spyOn(locationService, "resetLocation");
    }));

    it("should search for url", function () {
      controllerToBeTested.url = "www.google.com "
      controllerToBeTested.searchLocationByUrl();
      expect(locationService.searchForLocation).toHaveBeenCalled();
      expect(controllerToBeTested.error).toEqual("");
    });

    it("should search for my location", function () {
      controllerToBeTested.searchMyLocation();
      expect(locationService.searchForMyLocation).toHaveBeenCalled();
      expect(controllerToBeTested.error).toEqual("");
    });

    it("should search for url @fail", function () {
      controllerToBeTested.url = "adas "
      controllerToBeTested.searchLocationByUrl();
      expect(controllerToBeTested.error).not.toEqual("");
    });

    it("should reset location", function () {
      controllerToBeTested.url = "www.google.com "
      controllerToBeTested.resetLocation();
      expect(controllerToBeTested.error).toEqual("");
      expect(controllerToBeTested.url).toEqual("");
    });
  });

});