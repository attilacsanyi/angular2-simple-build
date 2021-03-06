module.exports = function (config) {

  var appBase = 'app/';      // transpiled app JS files
  var appAssets = '/base/app/'; // component assets fetched by Angular's compiler

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-htmlfile-reporter'),
      require('karma-phantomjs-launcher'),
    ],

    customLaunchers: {
      // From the CLI. Not used here but interesting
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: [
      // System.js for module loading
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      //'node_modules/es6-shim/es6-shim.js',
      'node_modules/core-js/client/shim.js',

      // Reflect and Zone.js
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Angular 2 itself and the testing library
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

      // angular2-in-memory-web-api
      { pattern: 'node_modules/angular2-in-memory-web-api/**/*.js', included: false, watched: false },

      // @ngrx.
      { pattern: 'node_modules/@ngrx/**/*.js', included: false, watched: false },

      'karma-test-shim.js',

      // transpiled application & spec code paths loaded via module imports
      { pattern: appBase + '**/*.js', included: false, watched: true },

      // asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      { pattern: appBase + '**/*.html', included: false, watched: true },
      { pattern: appBase + '**/*.css', included: false, watched: true },

      // paths for debugging with source maps in dev tools
      { pattern: appBase + '**/*.ts', included: false, watched: false },
      { pattern: appBase + '**/*.js.map', included: false, watched: false }
    ],

    // proxied base paths for loading assets
    proxies: {
      // required for component assets fetched by Angular's compiler
      "/app/": appAssets
    },

    exclude: [],
    preprocessors: {
      'app/**/!(*spec|*mock).js': ['coverage']
    },
    reporters: ['progress', 'html', 'coverage'],

    // HtmlReporter configuration
    htmlReporter: {
      // Open this file to see results in browser
      outputFile: 'karma/report/tests/index.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: __dirname
    },

    // CoverageReporter configuration
    coverageReporter: {
      dir: 'karma/report/coverage',
      reporters: [
        { type: 'json', subdir: '.', file: 'coverage-final.json' }
      ]
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  })
}