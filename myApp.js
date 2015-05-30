angular.module('projekt', [
  'ngRoute',
  'projekt.formview'
]).

config(['$routeProvider', function($routeProvider){
  $routeProvider.otherwise({redirectTo: '/formview'});
}]);
