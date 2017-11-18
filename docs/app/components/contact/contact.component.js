var contact = {
    templateUrl: './app/components/contact/contact.html',
    controller: ['$http', '$timeout', function ($http, $timeout) {
        var self = this;
        self.alertMessage = "Your message has been sent to Courtney. Thank you!";
        
        self.emailForm = {
            'name': 'test',
            'email': 'test@gmail.com',
            'info': 'test info'
        };

        self.getValidationClass = function (name) {
            if (name.$dirty || self.contactForm.$submitted) {
                if (name.$invalid) {
                    return 'has-error';
                } else {
                    return 'has-success';
                }
            }
            return '';
        }


        self.sendContactEmail = function () {
            console.log('sending email...', self.emailForm);

            self.isEmailSending = true;

            $http.post('/contact', self.emailForm).then(function successCallback(response) {
                self.showAlert();
                
                console.log(response);
                //            self.emailForm = {};
                //            self.contactForm.$setPristine();
            }, function errorCallback(response) {
                console.log(response)
            });
        }

        self.showAlert = function () {
            self.alert = true;

            $timeout(function () {
                self.alert = false;
            }, 3000);

        }
    }]
};

angular
    .module('contact')
    .component('contact', contact);