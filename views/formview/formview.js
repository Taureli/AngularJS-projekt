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
      this.getFromReddit = function getFromReddit() {
        searchGetter.getArticles(this.subreddit, function(v) {
          var i = 0;
          pThis.results = v.data.children;
          pThis.results.forEach(function(entry){
            pThis.results[i].contentT = $sce.trustAsHtml(pThis.results[i].data.title);
            pThis.results[i].url = $sce.trustAsHtml(pThis.results[i].data.permalink);
            pThis.results[i].thumbnail = $sce.trustAsHtml(pThis.results[i].data.thumbnail);
            pThis.results[i].subreddit = $sce.trustAsHtml(pThis.subreddit);
            pThis.results[i].id = $sce.trustAsHtml(pThis.results[i].data.id);
            i++;
          })
        });
      };
      this.getFromReddit();
}]);
