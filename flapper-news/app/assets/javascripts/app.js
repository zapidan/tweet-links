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
    'templates',
    'Devise'
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
      })
      .state('login', {
        url: '/login',
        templateUrl: 'auth/_login.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function() {
            $state.go('home');
          })
        }]
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/_register.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function() {
            $state.go('home');
          })
        }]
      });

    $urlRouterProvider.otherwise('home');
}]);