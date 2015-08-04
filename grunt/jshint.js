module.exports = {
	jshint:{
	    options: {   
	    	reporter: require('jshint-stylish')
	    },
	    main:[
	    	'assets/js/*.js',
	    	'assets/js/**/*.js'
	    ]
	}
};