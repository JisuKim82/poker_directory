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
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);

// build custom filter for slug(downcase name and replace space with underscore)
app.filter('slug', function(){
  return function(input){
    if(input){
      return input.toLowerCase().replace(' ','_');
    }
  };
});