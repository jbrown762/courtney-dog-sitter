var root = {
    templateUrl: './app/root.html',
    controller: ['$document', '$location', function ($document, $location) {
        var self = this;

        $document[0].title = "Courtney Hamm";

        self.scrollTo = function (id) {
            $location.hash(id);
        };
    }]
};

angular
    .module('root')
    .component('root', root);