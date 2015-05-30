angular.module('projekt.formview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/formview', {
    templateUrl: 'views/formview/formview.html',
    controller: 'FormviewCtrl'
  });
}])

.controller('FormviewCtrl', [function(){

}]);
