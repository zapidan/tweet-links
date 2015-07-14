'use strict';

/**
 * @ngdoc overview
 * @name flapperNewsApp
 * @description
 * # flapperNewsApp
 *
 * Main module of the application.
 */
angular
  .module('flapperNewsApp', [
    'ui.router',
    'templates'
  ])

  .config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl',
        resolve: {
          postPromise: ['posts', function(posts) {
            return posts.getAll();
          }]
        }
      })
      .state('post', {
        url: '/posts/{id}',
        templateUrl: 'posts/_post.html',
        controller: 'PostsCtrl',
        resolve: {
        post1: ['$stateParams', 'posts', function($stateParams, posts) {
            return posts.get($stateParams.id);
        }]
}
    });

    $urlRouterProvider.otherwise('home');
}]);