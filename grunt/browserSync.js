module.exports = {
    browserSync: {
	    files:{
	    	src: [
	    		'assets/less/**/*.less',
	    		'assets/js/**/*.js',
	    		'*.html'
	    	]
	    },
	    options:{
    		watchTask: true,
    		proxy:'labelanimation'
	    }
	}
}