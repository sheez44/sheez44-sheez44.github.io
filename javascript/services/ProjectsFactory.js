(function () {
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