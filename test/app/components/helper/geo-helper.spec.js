describe("helper component", function () {

    beforeEach(module('helper-module'));

    describe("helper rendering ", function () {

        var expectedHtml = '<geo-helper for="latitute" class="ng-isolate-scope"><span class="glyphicon glyphicon-question-sign glyphicon-pointer" data-toggle="tooltip" title="This is your latitute from ISP Global Village Telecom at Sat Apr 01 2017 17:33:11 GMT-0300 (Hora oficial do Brasil)"></span></geo-helper>'

        beforeEach(inject(function ($compile, $rootScope) {
            var scope = $rootScope.$new();
            helper = $compile('<div><geo-helper for="latitute"></geo-helper></div>')(scope);
            scope.$apply();
        }));

        it("should be rendered with latitute tooltip", function () {
            console.log(helper[0].title); 
            expect(helper[0].children[0].children[0].title).not.toEqual("");
        });
    });
});