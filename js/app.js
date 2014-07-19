var app = angular.module('myApp', []);

app.controller('MyController', function($scope, $http){
  $http.get('js/data.json').success(function(data){
    $scope.players = data;
  });
});