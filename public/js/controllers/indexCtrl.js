var app = angular.module('hammApp');

app.controller('indexController', function ($document, $location, anchorSmoothScroll) {
    var self = this;

    $document[0].title = "Courtney Hamm";

    self.scrollTo = function (id) {
        //$location.hash(id);
        anchorSmoothScroll.scrollTo(id);
    };

});
