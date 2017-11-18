angular.module('root').config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            template: '<home></home>',
        })

        .when('/about', {
            template: '<about></about>',
        })

        .when('/contact', {
            template: '<contact></contact>',
        })

        .when('/gallery', {
            template: '<gallery></gallery>',
        })

        .otherwise({
            redirectTo: '/'
        });
}]);
