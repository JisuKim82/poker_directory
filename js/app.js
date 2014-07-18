var app = angular.module('myApp', []);

app.controller('MyController', function($scope){
  $scope.player = {
    name: 'Phily Ivey',
    winnings: 20000000,
    ability: 9
  }
});