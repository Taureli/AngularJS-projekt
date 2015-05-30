angular.module('comments', [])
  .factory('commentGetter', ['$http',
    function($http) {
      var r;
      var getComments = function(subreddit, doneFunction) {
        var url = 'http://www.reddit.com/r/' + threadId + '.json';
        return $http.get(url).success(function(data) {
          r = data;
          doneFunction(r);
          console.log(r);
        }).error(function(data, status, headers, config) {
          r={};
          console.log(config);
        });
      };
      return {
        getComments: getComments
      };
    }
  ]);
