(function () {
	"use strict";

	angular
		.module('myApp', [
			'ngRoute',
			'ngAnimate'
		])
		.config(config);

		function config($routeProvider) {
			$routeProvider.
				when('/projects', {
					templateUrl: 'partials/projects.html',
					controller: 'ProjectsCtrl'
				}).
				when('/projects/:projectId', {
					templateUrl: 'partials/project-detail.html',
					controller: 'ProjectsDetailCtrl'
				}).
				when('/skills', {
					templateUrl: 'partials/skills.html',
					controller: 'SkillsCtrl'
				}).
				when('/bio', {
					templateUrl: 'partials/bio.html',
					controller: 'BioCtrl'
				}).
				when('/contact', {
					templateUrl: 'partials/contact.html',
					controller: 'ContactCtrl'
				}).
				otherwise({
					redirectTo: '/projects'
				});
		}
})();
;(function() {
	
	'use strict';

	angular
		.module('myApp')
		.controller('BioCtrl', ['$scope', BioCtrl]);

		function BioCtrl($scope) {
			$scope.header = 'My Bio';
		}

})();;(function() {
	
	'use strict';

	angular
		.module('myApp')
		.controller('ContactCtrl', ['$scope', ContactCtrl]);

		function ContactCtrl($scope) {
			$scope.header = 'Contact';
		}

})();;(function() {
	
	'use strict';

	angular
		.module('myApp')
		.controller('MainCtrl', ['$scope', MainCtrl]);

		function MainCtrl($scope) {
			$scope.test = 'Johan Voorhout';
		}

})();;(function() {
	
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

})();;(function() {
	
	'use strict';

	angular
		.module('myApp')
		.controller('SkillsCtrl', ['$scope', SkillsCtrl]);

		function SkillsCtrl($scope) {
			$scope.header = 'My Skills';
		}

})();;(function () {
	"use strict";

	angular
		.module('myApp')
		.factory('Projects', ['$http', '$q',
			function($http, $q) {

				return {
					getProjects: function() {
						var def = $q.defer();

						$http.get('projects.json')
							.success(function(data) {
								def.resolve(
									data.thumbs
								);
							})
							.error(function() {
								def.reject('failed to load the questions');
							});
						return def.promise;
					},
					getProject: function(id) {
						var def = $q.defer();

						$http.get('projects.json')
							.success(function(project) {
								def.resolve(
									project.projects[id]
								);
							})
							.error(function(e) {
								def.reject("Error " + e);
							});
						return def.promise;
					}
				};

			}]);

})();