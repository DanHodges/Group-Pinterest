var app = angular.module("PinterestApp", ["ngRoute", "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/pinsNsearch.html',
        controller: 'pinsNsearch'
      }).
      when('/main', {
        templateUrl: 'partials/mainBoard.html',
        controller: 'mainBoard'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);