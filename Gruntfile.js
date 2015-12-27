module.exports = function(grunt) {

	// configure
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['src/*.js']
		},
		qunit: {
			files: ['test/*.html']
		}
	});

	// include libraries
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');

	// run tasks
	grunt.registerTask('testIdentifier00', ['jshint', 'qunit']);
};