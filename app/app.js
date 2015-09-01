var app = angular.module("PinterestApp", ["ngRoute", "firebase", 'ui.bootstrap']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/mainBoard.html',
        controller: 'mainBoard'
      }).
      when('/search', {
        templateUrl: 'partials/pinsNsearch.html',
        controller: 'pinsNsearch'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);