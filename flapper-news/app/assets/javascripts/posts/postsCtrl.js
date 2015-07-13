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
    '$stateParams',
    'posts',
    function ($scope, $stateParams, posts) {
      $scope.post = posts.posts[$stateParams.id];
            console.log('fire posts service');


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