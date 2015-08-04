module.exports = {
    concat: {
        options: {
            mangle: true
        },
        files: {
            'scripts/app.js': ['assets/js/*.js', 'assets/js/**/*.js']
        }   
    }
};