(function() {
	
	'use strict';

	angular
		.module('myApp')
		.controller('SkillsCtrl', ['$scope', SkillsCtrl]);

		function SkillsCtrl($scope) {
			$scope.header = 'My Skills';
		}

})();