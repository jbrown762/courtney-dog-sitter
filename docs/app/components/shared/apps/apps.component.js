var apps = {
    templateUrl: './app/components/shared/apps/apps.html',
    controller: ['$window', function ($window) {
        var self = this;

        self.redirectToRover = function () {
            $window.open('https://www.rover.com/members/courtney-h-six-years-of-pet-siting-experience/', '_blank');
        };
    }]
};

angular
    .module('shared')
    .component('apps', apps);