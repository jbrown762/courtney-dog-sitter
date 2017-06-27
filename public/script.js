var app = angular.module('hammApp', ['ngRoute']);

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController',
            controllerAs: 'hc'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'views/about.html'
           // controller: 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        })

        // route for the pictures page
        .when('/gallery', {
            templateUrl: 'views/gallery.html',
            controller: 'galleryController'
        })

        // redirect all other routes to home page
        .otherwise({
            redirectTo: '/'
        });
});
