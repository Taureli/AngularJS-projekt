angular.module('projekt.commentsview', ['ngRoute', 'comments'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/commentsview/:threadId', {
    templateUrl: 'views/commentsview/commentsview.html',
    controller: 'CommentsviewCtrl'
  });
}])

.controller('CommentsviewCtrl', ['$scope', '$routeParams', '$sce', 'commentGetter',
    function($scope, $routeParams, $sce, commentGetter) {
      this.results = {};
      var pThis = this;
      $scope.threadId = $routeParams.threadId;
      console.log("ID " + $scope.threadId);
      this.getAllComments = function getAllComments() {
        commentGetter.getComments(this.subreddit, function(v) {
          var i = 0;
          pThis.results = v.data.children;
          pThis.results.forEach(function(entry){
            pThis.results[i].contentT = $sce.trustAsHtml(pThis.results[i].data.body);
            i++;
          })
        });
      };
}]);
