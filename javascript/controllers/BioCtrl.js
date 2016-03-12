(function() {
	
	'use strict';

	angular
		.module('myApp')
		.controller('BioCtrl', ['$scope', BioCtrl]);

		function BioCtrl($scope) {
			$scope.header = 'My Bio';
		}

})();