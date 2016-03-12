
module.exports = function(grunt) {
	pkg: grunt.file.readJSON('package.json'),
	grunt.initConfig({
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['javascript/**/*.js'],
				dest: 'build/main.js'
			}
		},

		jshint: {
			options: {
				globals: {
					jQuery: true
				}
			},
			beforeconcat: ['javascript/**/*.js'],
			afterconcat: 'build/main.js'
		},
		uglify: {
			dist: {
				files: {
					'build/main.min.js': ['build/main.js']
				}
			}
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		htmlhint: {
			html: {
				src: ['index.html']
			},
		},
		watch: {
			js: {
				files: ['javascript/*.js'],
				tasks: ['concat', 'uglify'],

			},
			css: {
				files: ['**/*.scss'],
				tasks: ['compass']
			}
		},	
	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-htmlhint');


	grunt.registerTask('default', ['concat', 'watch', 'jshint', 'uglify', 'compass']);
};