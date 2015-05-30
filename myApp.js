angular.module('projekt', [
  'ngRoute',
  'projekt.formview',
  'searchtest'
]).

config(['$routeProvider', function($routeProvider){
  $routeProvider.otherwise({redirectTo: '/formview'});
}]);
