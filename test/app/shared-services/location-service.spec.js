describe("location service - ", function () {

    var location = JSON.parse('{"as":"AS18881 TELEFÔNICA BRASIL S.A","city":"Jundiaí","country":"Brazil","countryCode":"BR","isp":"Global Village Telecom","lat":-23.1864,"lon":-46.8842,"org":"Global Village Telecom","query":"187.113.153.177","region":"SP","regionName":"Sao Paulo","status":"success","timezone":"America/Sao_Paulo","zip":""}');
    var myLocation = JSON.parse('{"as":"AS18881 TELEFÔNICA BRASIL S.A","city":"Jundiaí","country":"Brazil","countryCode":"BR","isp":"Global Village Telecom","lat":-23.1864,"lon":-46.8842,"org":"Global Village Telecom","query":"187.113.153.177","region":"SP","regionName":"Sao Paulo","status":"success","timezone":"America/Sao_Paulo","zip":""}')
    var urlGoogle = 'www.google.com'

    var locationServiceRest;

    beforeEach(module('geolocation-module'));

    beforeEach(inject(function (_locationService_, _locationServiceRest_) {
        locationService = _locationService_;
        locationServiceRest = _locationServiceRest_;

    }));

    it("should get my location", function () {
        var returnValue = {
            then: function (data) {
                return myLocation;
            }
        }
        spyOn(locationServiceRest, 'getMyLocation').and.returnValue(returnValue);

        var locationFound = locationService.searchForMyLocation();
        expect(locationServiceRest.getMyLocation).toHaveBeenCalled();
        expect(locationFound).toEqual(location);
    });

    it("should get specific location", function () {
        var returnValue = {
            then: function (data) {
                return location;
            }
        }

        spyOn(locationServiceRest, 'getLocation').and.callFake(function (url) {
            return params[url]
        }).and.returnValue(returnValue);

        var locationFound = locationService.searchForLocation(urlGoogle);
        expect(locationServiceRest.getLocation).toHaveBeenCalled();
        expect(locationFound).toEqual(location);
    });

    it("should clear location", function () {

        var returnValue = {
            then: function (data) {
                return location;
            }
        }

        spyOn(locationServiceRest, 'getLocation').and.callFake(function (url) {
            return params[url]
        }).and.returnValue(returnValue);

        locationService.searchForLocation(urlGoogle);
        locationService.resetLocation();
        expect(locationService.getLocation()).toEqual({});
    });

});