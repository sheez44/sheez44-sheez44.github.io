(function() {
	
	'use strict';

	angular
		.module('myApp')
		.controller('ProjectsCtrl', ['$scope', 'Projects', ProjectsCtrl]);

		function ProjectsCtrl($scope, Projects) {
			$scope.projects = undefined;

			$scope.header = "My Projects";

			Projects.getProjects().then(function(data) {
				$scope.projects = data;

			});

		}

})();

(function() {
	
	'use strict';

	angular
		.module('myApp')
		.controller('ProjectsDetailCtrl', ['$scope', '$routeParams', '$http', ProjectsDetailCtrl]);

		function ProjectsDetailCtrl($scope, $routeParams, $http) {
			$scope.projectId = $routeParams.projectId;

			$http.get('projects/'+$routeParams.projectId.toString()+'.json').success(function(data) {
				$scope.project = data;
			});

		}

})();