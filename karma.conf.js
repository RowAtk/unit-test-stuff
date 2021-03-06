// Karma configuration
// Generated on Sun Mar 15 2020 20:04:13 GMT-0500 (Eastern Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-jquery', 'jasmine-ajax', 'jasmine', 'browserify', 'fixture'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*.js',
      'test/fixtures/*.fix.html',
      // 'src/*.js'
    ],


    // list of files / patterns to exclude
    exclude: [
      // 'test/unit/add.unit.js',
      // 'test/unit/viewallclients.unit.js',
      // 'test/e2e/viewallclients.e2e.js',
      // 'test/unit/viewOne.unit.js',
      // 'test/**/update.e2e.js',
      // 'test/e2e/delete.e2e.js',
      // 'test/**/unit/*.unit.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/*.js': 'coverage',
      '**/*.html'   : ['html2js'],
      '**/*.json'   : ['json_fixtures'],
      'test/e2e/viewallclients.e2e.js': [ 'browserify' ],
			'test/unit/viewallclients.unit.js': [ 'browserify' ]
    },
    
    // JSON Fixtures Preprocessor config
    jsonFixturesPreprocessor: {
      variableName: '__json__'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],
    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test
      suppressErrorSummary: true,  // do not print error summary
      suppressFailed: false,  // do not print information about failed tests
      suppressPassed: false,  // do not print information about passed tests
      suppressSkipped: true,  // do not print information about skipped tests
      showSpecTiming: false // print the time elapsed for each spec
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
