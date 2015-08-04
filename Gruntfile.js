module.exports = function (grunt) {    
	require('time-grunt')(grunt);
    require('load-grunt-config')(grunt);    
    // define tasks
    grunt.registerTask('default', ['browserSync', 'watch']);                
    grunt.registerTask('dev', ['clean', 'less', 'postcss', 'concat']);
};