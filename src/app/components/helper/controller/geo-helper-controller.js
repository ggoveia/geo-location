angular.module('helper-module')
    .controller('geoHelperController', geoHelperController);

function geoHelperController() {
    var self = this;
    self.description = "";

    var date = new Date();
    self.$onInit = function () {
        self.description = "This is your " + self.for + " from ISP Global Village Telecom at " + date;
    };
}