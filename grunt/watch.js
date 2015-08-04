module.exports = {
    options: {
        spawn: false,
        livereload: true
    },

    html:{
        files:['*.html']
    },
    scripts: {
        files: [
			'assets/js/*.js',
            'assets/js/**/*.js'
        ],
        tasks: [            
			'jshint',
            'concat',
        ]
    },    
    css: {
        files: [
            'assets/less/main.less',
            'assets/less/**/*.less'
        ],
        tasks: [            
            'less',
            'postcss',
            //'cssmin'
        ],
    },    
};