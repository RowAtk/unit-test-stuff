module.exports = function(config) {
	config.set({
    	// base path that will be used to resolve all patterns (eg. files, exclude)
    	basePath: '',

    	// frameworks to use
    	frameworks: ['jasmine-jquery', 'jasmine-ajax', 'jasmine', 'parcel'],

    	// list of files / patterns to load in the browser
    	files: [
			'test/e2e/viewallclients.e2e.js',
			'test/unit/viewallclients.unit.js'
    	],

    	preprocessors: {
			'test/e2e/viewallclients.e2e.js': [ 'parcel' ],
			'test/unit/viewallclients.unit.js': [ 'parcel' ]
    	},

    	// list of files to exclude
    	exclude: [
      		'test/e2e/temp.txt'
		],

    	browsers: ['FirefoxDeveloper'],

    	autoWatch: true
	})
}
