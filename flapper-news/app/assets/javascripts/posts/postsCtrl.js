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
    'post1',
    function ($scope, posts, post1) {
      $scope.post = post1;

      $scope.addComment = function() {
        if ($scope.body === '') { return; }
        posts.addComment(post1.id, {
          body: $scope.body,
        }).success(function(comment) {
          comment.author = 'user';
          comment.upvotes = 0;
          $scope.post.comments.push(comment);
        });
        $scope.body = '';
      };  

      $scope.incrementUpvotes = function (comment) {
        posts.upvoteComment(post1, comment);
      };

      $scope.decrementUpvotes = function (comment) {
        posts.downvoteComment(post1, comment);
      };
  }]);