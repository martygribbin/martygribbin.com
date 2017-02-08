// script.js



    // create the module and name it scotchApp

        // also include ngRoute for all our routing needs

    var scotchApp = angular.module('scotchApp', ['ngRoute']);



    // configure our routes

    scotchApp.config(function($routeProvider) {

        $routeProvider



            // route for the home page

            .when('/', {

                templateUrl : 'view/home.html',

                controller  : 'mainController'

            })



            // route for the about page

            .when('/about', {

                templateUrl : 'view/about.html',

                controller  : 'aboutController'

            })



             // route for the portfolio page

            .when('/portfolio', {

                templateUrl : 'view/portfolio.html',

                controller  : 'portfolioController'

            })



            // route for the contact page

            .when('/contact', {

                templateUrl : 'view/contact.html',

                controller  : 'contactController'

            })



            .when('/h2flow', {

                templateUrl : 'portfolio/h2flow.html',

                controller  : 'portfolioController'

            })

            .when('/cathykelly', {

                templateUrl : 'portfolio/cathy.html',

                controller  : 'portfolioController'

            })

            .when('/interrailing-packages', {

                templateUrl : 'portfolio/inter.html',

                controller  : 'portfolioController'

            })

            .when('/benburb-bramleys', {

                templateUrl : 'portfolio/benburb.html',

                controller  : 'portfolioController'

            })

            .when('/scope-electrical', {

                templateUrl : 'portfolio/scope.html',

                controller  : 'portfolioController'

            })

            .when('/puddle-pals', {

                templateUrl : 'portfolio/puddle.html',

                controller  : 'portfolioController'

            })

            .when('/clarke-fitness', {

                templateUrl : 'portfolio/clarke.html',

                controller  : 'portfolioController'

            })

            .when('/basil-sheils', {

                templateUrl : 'portfolio/basil.html',

                controller  : 'portfolioController'

            })

            .when('/glacier-water', {

                templateUrl : 'portfolio/glacier.html',

                controller  : 'portfolioController'

            })

            .when('/resolve-planning', {

                templateUrl : 'portfolio/resolve.html',

                controller  : 'portfolioController'

            })

            .when('/wee-buns', {

                templateUrl : 'portfolio/buns.html',

                controller  : 'portfolioController'

            })


            .when('/toal-trucks', {

                templateUrl : 'portfolio/resolve.html',

                controller  : 'portfolioController'

            });
    });



    // create the controller and inject Angular's $scope

    scotchApp.controller('mainController', function($scope) {

        // create a message to display in our view

        $scope.message = '';

        $scope.responsiveMenu = false;

//website navigation links

$scope.menu = [ 

  { 

    name: 'Home',

    link: '#'

  },

    { 

    name: 'About',

    link: '#about'

  },

  { 

    name: 'Portfolio',

    link: '#portfolio' 

  },

    { 

    name: 'Contact',

    link: '#contact' 

  } 

];

 $scope.portfolio = [ 

  { 

 name: 'Interrailing Packages', 

    price: 8, 

    pubdate: new Date('2013', '08', '01'), 

    cover: 'img/interrailing-packages.jpg',

    link: '#interrailing-packages', 

    projectInfo: ''


  }, 
      { 

    name: 'Basil Sheils', 

    price: 8, 

    pubdate: new Date('2013', '08', '01'), 

    cover: 'img/basil-sheils-armagh.png',

    link: '#basil-sheils', 

    projectInfo: ''

  },
  { 

   name: 'Glacier Water Systems', 

    price: 8, 

    pubdate: new Date('2013', '08', '01'), 

    cover: 'img/glacier-water-systems.jpg',

    link: '#glacier-water', 

    projectInfo: ''



  }];


    });



    scotchApp.controller('aboutController', function($scope) {

        $scope.message = 'Look! I am an about page.';
        

    });

    scotchApp.controller('contactController', function($scope, $http) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'view/contact.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }
}


        );



        scotchApp.controller('portfolioController', function($scope) {

        $scope.message = 'View some of my work.';





          $scope.portfolio = [ 

  { 

    name: 'H2Flow Water Management', 

    price: 19, 

    pubdate: new Date('2014', '03', '08'), 

    cover: 'img/h2flow-water-management-belfast.JPG',

    link: '#h2flow',

    projectInfo: ''


  }, 
  { 

    name: 'CrossFit Armagh', 

    price: 8, 

    pubdate: new Date('2013', '08', '01'), 

    cover: 'img/crossfit-armagh.png',

    link: '#crossfit-armagh',

    projectInfo: ''



  }, 
  { 

    name: 'Cathy Kelly Church Singer', 

    price: 8, 

    pubdate: new Date('2013', '08', '01'), 

    cover: 'img/cathy-kelly-church-singer.png',

    link: '#cathykelly', 

    projectInfo: ''

  },

  { 

    name: 'Interrailing Packages', 

    price: 8, 

    pubdate: new Date('2013', '08', '01'), 

    cover: 'img/interrailing-packages.jpg',

    link: '#interrailing-packages', 

    projectInfo: ''

  },
  { 

    name: 'Benburb Bramleys', 

    price: 8, 

    pubdate: new Date('2013', '08', '01'), 

    cover: 'img/benburb-bramleys.jpg',

    link: '#benburb-bramleys', 

    projectInfo: ''

  },
  { 

    name: 'Scope Electrical', 

    price: 8, 

    pubdate: new Date('2013', '08', '01'), 

    cover: 'img/scope-electrical.jpg',

    link: '#scope-electrical', 

    projectInfo: ''

  },
  { 

    name: 'Puddle Pals', 

    price: 8, 

    pubdate: new Date('2013', '08', '01'), 

    cover: 'img/puddle-pals.jpg',

    link: '#puddle-pals', 

    projectInfo: ''

  },
    { 

    name: 'Clarke Fitness', 

    price: 8, 

    pubdate: new Date('2013', '08', '01'), 

    cover: 'img/clarke-fitness-armagh.jpg',

    link: '#clarke-fitness', 

    projectInfo: ''

  },
    { 

    name: 'Basil Sheils', 

    price: 8, 

    pubdate: new Date('2013', '08', '01'), 

    cover: 'img/basil-sheils-armagh.png',

    link: '#basil-sheils', 

    projectInfo: ''

  },
      { 

    name: 'Glacier Water Systems', 

    price: 8, 

    pubdate: new Date('2013', '08', '01'), 

    cover: 'img/glacier-water-systems.jpg',

    link: '#glacier-water', 

    projectInfo: ''

  },
  { 

    name: 'Resolve Planning', 

    price: 8, 

    pubdate: new Date('2013', '08', '01'), 

    cover: 'img/resolve-planning.jpg',

    link: '#resolve-planning', 

    projectInfo: ''

  },
    { 

    name: 'Wee Buns', 

    price: 8, 

    pubdate: new Date('2013', '08', '01'), 

    cover: 'img/wee-buns.jpg',

    link: '#wee-buns', 

    projectInfo: ''


  },
  { 

    name: 'Toal Truck Services', 

    price: 8, 

    pubdate: new Date('2013', '08', '01'), 

    cover: 'img/toal-truck-services.jpg',

    link: '#toal-trucks', 

    

  } 

];

    });



