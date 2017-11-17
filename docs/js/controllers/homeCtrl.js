var app = angular.module('hammApp');

app.controller('homeController', function ($window) {
    var self = this;

    self.redirectToRover = function () {
        $window.open('https://www.rover.com/members/courtney-h-six-years-of-pet-siting-experience/', '_blank');
    };

    

});
