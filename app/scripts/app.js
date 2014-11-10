'use strict';

/**
 * @ngdoc overview
 * @name pathfinderCharacterBuilderApp
 * @description
 * # pathfinderCharacterBuilderApp
 *
 * Main module of the application.
 */
angular
  .module('pathfinderCharacterBuilderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/class', {
        templateUrl: 'views/class.html',
        controller: 'ClassCtrl'
      })
      .when('/spell', {
        templateUrl: 'views/spell.html',
        controller: 'SpellCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
