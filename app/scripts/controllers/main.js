'use strict';

/**
 * @ngdoc function
 * @name customValidationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the customValidationApp
 */
angular.module('customValidationApp')
  .controller('MainCtrl', ["$rootScope",function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.addSection = function(isInvalid){
	$rootScope.$broadcast('onSubmit');
	};
  }]);
