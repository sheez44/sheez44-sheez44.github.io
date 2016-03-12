(function() {
	
	'use strict';

	angular
		.module('myApp')
		.controller('MainCtrl', ['$scope', MainCtrl]);

		function MainCtrl($scope) {
			$scope.test = 'Johan Voorhout';
		}

})();