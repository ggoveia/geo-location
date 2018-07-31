describe("location service rest -", function () {

  beforeEach(module('geolocation-module'));

  describe("get location", function () {

    var httpBackend;
    var defer;

    var expectLocation = JSON.parse('{"as":"AS18881 TELEFÔNICA BRASIL S.A","city":"Jundiaí","country":"Brazil","countryCode":"BR","isp":"Global Village Telecom","lat":-23.1864,"lon":-46.8842,"org":"Global Village Telecom","query":"187.113.153.177","region":"SP","regionName":"Sao Paulo","status":"success","timezone":"America/Sao_Paulo","zip":""}');
    var googleLocation = JSON.parse('{"as":"AS15169 Google Inc.","city":"McDonough","country":"United States","countryCode":"US","isp":"Google","lat":33.4514,"lon":-84.187,"org":"Google","query":"172.217.1.68","region":"GA","regionName":"Georgia","status":"success","timezone":"America/New_York","zip":"30253"}');

    beforeEach(inject(function (_locationServiceRest_, $httpBackend) {
      restService = _locationServiceRest_;
      httpBackend = $httpBackend;
    }));

    it("should get my location", function (done) {

      var testGetMyLocation = function (myLocation) {
        expect(myLocation).toEqual(expectLocation);
      }
      var failTest = function (error) {
        expect(error).toBeUndefined();
      };

      var expectedThen = {
        then: function (data) {
          return data(expectLocation);
        }
      }

      httpBackend.expectGET('http://ip-api.com/json/').respond(200, expectedThen)

      restService.getMyLocation()
        .then(testGetMyLocation)
        .catch(failTest)
        .finally(done);

      httpBackend.flush();
    });

    it("should get specific location", function (done) {

      var url = "www.google.com";

      var testLocation = function (googleLocation) {
        expect(googleLocation).toEqual(googleLocation);
      }
      var failTest = function (error) {
        expect(error).toBeUndefined();
      };

      httpBackend.expectGET('http://ip-api.com/json/' + url).respond(200, googleLocation)

      restService.getLocation(url)
        .then(testLocation)
        .catch(failTest)
        .finally(done);

      httpBackend.flush();

    });
  });
});