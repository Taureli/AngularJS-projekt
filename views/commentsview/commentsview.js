angular.module('projekt.commentsview', ['ngRoute', 'comments'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/commentsview/:subreddit/:threadId', {
    templateUrl: 'views/commentsview/commentsview.html',
    controller: 'CommentsviewCtrl'
  });
}])

.controller('CommentsviewCtrl', ['$scope', '$routeParams', '$timeout', '$sce', 'commentGetter',
    function($scope, $routeParams, $timeout, $sce, commentGetter) {
      this.results = {};
      var pThis = this;
      this.getAllComments = function getAllComments() {
        commentGetter.getComments($routeParams.subreddit, $routeParams.threadId, function(v) {
          var i = 0;
          pThis.results = v[1].data.children;
          pThis.results.forEach(function(entry){
            pThis.results[i].contentT = $sce.trustAsHtml(pThis.results[i].data.body);
            i++;
          })
        });
      };
      this.getAllComments();
}]);
