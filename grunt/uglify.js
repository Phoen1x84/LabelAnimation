module.exports = {
    uglify: {
        options: {
            mangle: true
        },
        files: {
            'scripts/app-min.js': ['assets/js/app.js', 'assets/js/**/*.js']
        }   
    }
};