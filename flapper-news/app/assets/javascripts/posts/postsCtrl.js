'use strict';

/**
 * @ngdoc function
 * @name flapperNewsApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the flapperNewsApp
 */
angular.module('flapperNewsApp')
  .controller('PostsCtrl', [
    '$scope',
    'posts',
    'post',
    function ($scope, posts, post) {
      $scope.post = post;

      $scope.addComment = function() {
        if ($scope.body === '') { return; }
        $scope.post.comments.push({
          body: $scope.body,
          author: 'user',
          upvotes: 0
        });
        $scope.body = '';
      };  

      $scope.incrementUpvotes = function (comment) {
        comment.upvotes += 1;
      };

      $scope.decrementUpvotes = function (comment) {
        comment.upvotes -= 1;
      };
  }]);