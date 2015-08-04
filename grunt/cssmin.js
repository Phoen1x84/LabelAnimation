module.exports = {
	cssmin: {
		options: {
		shorthandCompacting: false,
		roundingPrecision: -1
		},
	  
	    files: {
	      'css/main.min.css': ['css/*.css', 'css/**/*.css']
	    }
	  
	},
};