angular.module('projekt.formview', ['ngRoute', 'searchtest'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/formview', {
    templateUrl: 'views/formview/formview.html',
    controller: 'FormviewCtrl'
  });
}])

.controller('FormviewCtrl', ['$scope', '$sce', 'searchGetter',
    function($scope, $sce, searchGetter) {
      this.subreddit = "ProgrammerHumor";
      this.results = {};
      var pThis = this;
      console.log($scope);
      this.getFromReddit = function getFromReddit() {
        searchGetter.getArticles(this.subreddit, function(v) {
          var i = 0;
          pThis.results = v.data.children;
          pThis.results.forEach(function(entry){
            pThis.results[i].contentT = $sce.trustAsHtml(pThis.results[i].data.title);
            i++;
          })
        });
      };
}]);
