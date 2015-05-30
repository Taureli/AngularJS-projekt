angular.module('projekt', [
  'ngRoute',
  'projekt.formview',
  'projekt.commentsview',
  'searchtest',
  'comments'
]).

config(['$routeProvider', function($routeProvider){
  $routeProvider.otherwise({redirectTo: '/formview'});
}]);
