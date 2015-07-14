'use strict';

/**
 * @ngdoc service
 * @name flapperNewsApp.posts
 * @description
 * # posts
 * Factory in the flapperNewsApp.
 */
angular.module('flapperNewsApp')
  .factory('posts', [
    '$http',
    function ($http) {
    
    var o = {
      posts: []
    };

    o.getAll = function() {
      return $http.get('/posts.json').success(function(data) {
        angular.copy(data, o.posts);
      });
    };

    o.create = function(post) {
      return $http.post('/posts.json', post).success(function(data) {
        o.posts.push(data);
      });
    };

    return o;
  }]);