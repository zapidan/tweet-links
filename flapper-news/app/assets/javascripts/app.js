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
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('post', {
        url: '/posts/{id}',
        templateUrl: 'views/post.html',
        controller: 'PostsCtrl'
    });

    $urlRouterProvider.otherwise('home');
}]);