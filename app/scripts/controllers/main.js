'use strict';

/**
 * @ngdoc function
 * @name flapperNewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flapperNewsApp
 */
angular.module('flapperNewsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.posts = [
      {title: 'post1', upvotes: 5},
      {title: 'post2', upvotes: 2},
      {title: 'post3', upvotes: 15}
    ];

    $scope.addPost = function() {
      if(!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title, 
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function (post) {
      post.upvotes += 1;
    };

    $scope.decrementUpvotes = function (post) {
      post.upvotes -= 1;
    };
  });
