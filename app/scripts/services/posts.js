'use strict';

/**
 * @ngdoc service
 * @name flapperNewsApp.posts
 * @description
 * # posts
 * Factory in the flapperNewsApp.
 */
angular.module('flapperNewsApp')
  .factory('posts', [function () {
    
    var o = {
      posts: []
    };

    return o;
  }]);
