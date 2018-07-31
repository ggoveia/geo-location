// Karma configuration
// Generated on Thu Mar 30 2017 18:50:18 GMT-0300 (Hora oficial do Brasil)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/jasmine-data_driven_tests/src/all.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/jquery/dist/jquery.js',
      'test/google-mock.js',
      'node_modules/ngmap/build/scripts/ng-map.js',

      'src/*.js',
      'src/app/geolocation-module.js',
      'src/app/controller/*.js',
      'src/app/shared-services/*.js',
      'src/app/components/**/template/*.html',
      'src/app/components/*/*.js',
      'src/app/components/**/*.js',
      'src/app/components/**/**/*.js',
      'test/app/components/**/*.spec.js',
      'test/app/shared-services/*.spec.js',
      'test/app/controller/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor',
      'karma-coverage'
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    ngHtml2JsPreprocessor: {
      prependPrefix: '/',
      moduleName: "template-module"
    },

    preprocessors: {
      'src/app/components/search-url/template/search-url-template.html': ['ng-html2js'],
      'src/app/components/geolocation-info/template/geolocation-info-template.html': ['ng-html2js'],

      'src/*.js': ['coverage'],
      'src/app/controller/*.js': ['coverage'],
      'src/app/shared-services/*.js': ['coverage'],
      'src/app/components/*/*.js': ['coverage'],
      'src/app/components/**/*.js': ['coverage'],
      'src/app/components/**/**/*.js': ['coverage'],
      'test/app/components/**/*.spec.js': ['coverage'],
      'test/app/shared-services/*.spec.js': ['coverage']
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage'
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


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
