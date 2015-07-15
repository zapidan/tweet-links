'use strict';

/**
 * @ngdoc function
 * @name flapperNewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flapperNewsApp
 */
app.controller('MainCtrl', ['$scope', 'posts', 'Auth', function ($scope, posts, Auth) {
  $scope.posts = posts.posts;

  $scope.signedIn = Auth.isAuthenticated;

  $scope.addPost = function() {
    if(!$scope.title || $scope.title === '') { return; }
    posts.create({
      title: $scope.title, 
      link: $scope.link,
      upvotes: 0,
      comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
      ]
    });
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function (post) {
    posts.upvote(post);
  };

  $scope.decrementUpvotes = function (post) {
    posts.downvote(post);
  };
}]);