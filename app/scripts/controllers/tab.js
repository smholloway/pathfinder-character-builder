'use strict';

/**
 * @ngdoc function
 * @name pathfinderCharacterBuilderApp.controller:TabCtrl
 * @description
 * # TabCtrl
 * Controller of the pathfinderCharacterBuilderApp
 */
angular.module('pathfinderCharacterBuilderApp')
  .controller('TabCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.tab = 1;

    this.setTab = function(tabId){
      this.tab = tabId;
    };

    this.isSet = function(tabId){
      return this.tab === tabId;
    };

    $scope.isCurrentPath = function (path) {
      return $location.path() === path;
    };
  });
