var app = angular.module('myApp', [
  'ngRoute',
  'playerControllers'
]);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);