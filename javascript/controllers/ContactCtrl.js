(function() {
	
	'use strict';

	angular
		.module('myApp')
		.controller('ContactCtrl', ['$scope', ContactCtrl]);

		function ContactCtrl($scope) {
			$scope.header = 'Contact';
		}

})();