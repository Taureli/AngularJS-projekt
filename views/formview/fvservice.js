angular.module('searchtest', [])
  .factory('searchGetter', ['$http',
    function($http) {
      var r;
      var getArticles = function(subreddit, doneFunction) {
        var url = 'http://www.reddit.com/r/' + subreddit + '.json';
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
        getArticles: getArticles
      };
    }
  ]);
