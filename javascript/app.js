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
